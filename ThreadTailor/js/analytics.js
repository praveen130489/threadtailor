// GA4/GTM event helpers
window.dataLayer = window.dataLayer || [];
export function track(event, params={}){ window.dataLayer.push({ event, ...params }); }
export function trackView(page){ track('page_view', { page }); }
export function trackPurchase(value, currency='INR'){ track('purchase', { value, currency }); }

// Session recording placeholder
export function initSessionRecording(){ /* integrate rrweb/Hotjar/Clarity here */ }