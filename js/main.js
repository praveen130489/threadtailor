// Thread & Tailor - Global JS
(function(){
  const PROGRESS_TARGET = 1499;
  let cartTotal = 0;

  function formatCurrency(inr){ return `₹${Math.round(inr).toLocaleString('en-IN')}`; }

  function updateProgressBar(){
    const el = document.querySelector('[data-progress]');
    const copy = document.querySelector('[data-progress-copy]');
    if(!el || !copy) return;
    const pct = Math.max(0, Math.min(100, (cartTotal / PROGRESS_TARGET) * 100));
    el.style.width = pct + '%';
    const remaining = Math.max(0, PROGRESS_TARGET - cartTotal);
    copy.textContent = remaining > 0 ? `Add ${formatCurrency(remaining)} for free shipping` : 'You unlocked free shipping!';
  }

  function initCountdown(){
    const timer = document.querySelector('[data-timer]');
    if(!timer) return;
    const end = Date.now() + (1000 * 60 * 60 * 6); // 6 hours
    function tick(){
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000)/60000);
      const s = Math.floor((diff % 60000)/1000);
      timer.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
      if(diff>0) requestAnimationFrame(()=>setTimeout(tick, 250));
    }
    tick();
  }

  function lazy(){
    const imgs = document.querySelectorAll('img[data-src]');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const i = e.target; i.src = i.getAttribute('data-src'); i.removeAttribute('data-src'); io.unobserve(i);
        }
      });
    },{ rootMargin: '200px' });
    imgs.forEach(i=>io.observe(i));
  }

  function analytics(){
    window.dataLayer = window.dataLayer || [];
    document.addEventListener('click', (e)=>{
      const t = e.target.closest('[data-ev]'); if(!t) return;
      const ev = t.getAttribute('data-ev');
      const meta = t.dataset || {};
      window.dataLayer.push({ event: ev, ...meta });
    });
  }

  function urgencySignals(){
    const viewers = document.querySelector('[data-viewers]');
    if(viewers){
      const n = 8 + Math.floor(Math.random()*24);
      viewers.textContent = `${n} people viewed in last hour`;
    }
    const stock = document.querySelector('[data-stock]');
    if(stock){
      const left = 3 + Math.floor(Math.random()*7);
      stock.textContent = `Only ${left} left — selling fast!`;
    }
  }

  async function registerSW(){
    if('serviceWorker' in navigator){
      try { await navigator.serviceWorker.register('/sw.js'); } catch(e){ console.warn('SW failed', e); }
    }
  }

  function prefetch(){
    const l = document.createElement('link'); l.rel = 'prefetch'; l.href = '/checkout/index.html'; document.head.appendChild(l);
  }

  window.TTCart = {
    add(amount){ cartTotal += amount; updateProgressBar(); window.dataLayer?.push({event:'add_to_cart', value: amount}); },
    set(total){ cartTotal = total; updateProgressBar(); },
    get(){ return cartTotal; }
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    updateProgressBar(); initCountdown(); lazy(); analytics(); urgencySignals(); registerSW(); prefetch();
  });
})();