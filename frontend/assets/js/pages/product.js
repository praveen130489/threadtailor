import { apiGet, apiPost } from '../lib/api.js';
import { qs, getQueryParam } from '../lib/utils.js';
import { renderFAQ } from '../components/faqAccordion.js';
import { mountReviewList } from '../components/reviewList.js';
import { openTryOn } from '../lib/tryon.js';
import { track, Events } from '../lib/analytics.js';

(async function mountPDP(){
  const slug = getQueryParam('slug');
  if (!slug) return;
  const p = await apiGet(`/products/${encodeURIComponent(slug)}`);
  qs('#pdp-title').textContent = p.title;
  qs('#pdp-desc').textContent = p.description;
  qs('#pdp-price').textContent = `₹${p.price.value}`;
  const imgWrap = qs('#pdp-images');
  imgWrap.innerHTML = (p.images||[]).map(src => `<img alt="${p.title}" src="${src}"/>`).join('');
  const facts = qs('#quick-facts');
  facts.innerHTML = (p.quickFacts||[]).map(f=>`<div class="micro"><strong>${f.key}:</strong> ${f.value}</div>`).join('');
  const urgency = qs('#urgency');
  const viewers = Math.floor(Math.random()*20)+5; const stock = p.variants?.reduce((s,v)=>s+v.stock,0)||10;
  urgency.textContent = `${viewers} people viewed in last hour • ${stock < 5 ? 'Low stock' : 'In stock'}`;

  qs('#add-to-cart').addEventListener('click', async ()=>{
    await apiPost('/cart/add', { product: p, quantity: 1 });
    const res = await fetch('/api/cart'); const cart = await res.json();
    localStorage.setItem('tt_subtotal', String(cart.subtotal||0));
    track(Events.addToCart, { value: p.price.value, currency: 'INR', item: p.slug });
    alert('Added to cart');
  });

  const faqItems = [
    { q: 'What is the fabric?', a: '100% Organic Cotton.' },
    { q: 'How to wash?', a: 'Machine wash cold, tumble dry low.' },
    { q: 'Return policy?', a: 'Free returns within 30 days.' },
  ];
  renderFAQ(qs('#faq'), faqItems);

  await mountReviewList(qs('#pdp-review-list'), slug);

  // Try-On
  const modal = qs('#tryon-modal');
  let closeFn = null;
  qs('#tryon-btn').addEventListener('click', async ()=>{
    closeFn = await openTryOn(modal);
  });
  qs('#tryon-close').addEventListener('click', ()=>{ if (closeFn) closeFn(); });
})();