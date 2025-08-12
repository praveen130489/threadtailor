import { apiPost } from '../lib/api.js';
import { qs } from '../lib/utils.js';
import { track, Events } from '../lib/analytics.js';

(async function mountCheckout(){
  const form = qs('#checkout-form'); if (!form) return;
  const cartRes = await fetch('/api/cart'); const cart = await cartRes.json();
  const begin = await apiPost('/checkout/begin', { cart });
  qs('#eta').textContent = `Estimated delivery: ${begin.eta}`;
  track(Events.beginCheckout, { value: cart.subtotal, currency: 'INR' });
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await apiPost('/checkout/purchase', { cart, address: data });
    track(Events.purchase, { value: cart.subtotal, currency: 'INR', transaction_id: res.orderId });
    alert(`Order placed! ID: ${res.orderId}`);
    location.href = '/';
  });
})();