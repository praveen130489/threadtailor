const CACHE = 'tt-v1';
const ASSETS = [
  '/', '/index.html', '/assets/css/base.css', '/assets/css/layout.css',
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request).then(fr=>{
      const copy = fr.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return fr;
    }).catch(()=>res))
  );
});