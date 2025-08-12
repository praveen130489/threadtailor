import { apiGet, apiPost } from '../lib/api.js';
import { qs } from '../lib/utils.js';

(async function mountCart(){
  const cart = await apiGet('/cart');
  render(cart);

  async function render(c){
    qs('#cart-items').innerHTML = c.items.map(i=>`
      <div class="item">
        <img src="${i.product.images?.[0]}" alt="${i.product.title}" width="80"/>
        <div>
          <div>${i.product.title}</div>
          <div class="micro">Qty: ${i.quantity}</div>
        </div>
        <div>₹${i.product.price.value * i.quantity}</div>
      </div>
    `).join('') || '<p>Your cart is empty.</p>';
    qs('#cart-summary').innerHTML = `<strong>Subtotal:</strong> ₹${c.subtotal}`;
    localStorage.setItem('tt_subtotal', String(c.subtotal||0));
    const products = await apiGet('/products');
    const upsell = products.slice(0,3).map(p=>`<a href="/product.html?slug=${p.slug}">${p.title}</a>`).join(' • ');
    qs('#complete-look').innerHTML = `<div class="micro">Complete the look:</div>${upsell}`;
  }
})();