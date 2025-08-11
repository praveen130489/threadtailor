const CACHE = 'tt-v1';
self.addEventListener('install', (e)=>{ self.skipWaiting(); e.waitUntil(caches.open(CACHE)); });
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if(url.origin !== location.origin) return;
  e.respondWith((async()=>{
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request);
    const fetchPromise = fetch(e.request).then((res)=>{ cache.put(e.request, res.clone()); return res; }).catch(()=>cached);
    return cached || fetchPromise;
  })());
});