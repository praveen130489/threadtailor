import { qs } from '../lib/utils.js';

(function initBar(){
  const el = qs('#free-shipping-bar'); if (!el) return;
  const threshold = 1499;
  let subtotal = Number(localStorage.getItem('tt_subtotal') || 0);
  render();
  window.addEventListener('storage', (e)=>{ if (e.key==='tt_subtotal'){ subtotal = Number(e.newValue||0); render(); }});
  function render(){
    const remaining = Math.max(0, threshold - subtotal);
    el.textContent = remaining === 0 ? 'You unlocked free shipping! 🎉' : `₹${remaining} away from free shipping`;
  }
})();