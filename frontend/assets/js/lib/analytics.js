(function initAnalytics(){
  const GTM_ID = (window.GTM_ID || window.__ENV_GTM_ID || null);
  if (!GTM_ID) return; // Optional
  const s = document.createElement('script'); s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
})();

export function track(event, data = {}){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export const Events = {
  productClick: 'product_click',
  addToCart: 'add_to_cart',
  beginCheckout: 'begin_checkout',
  purchase: 'purchase',
};