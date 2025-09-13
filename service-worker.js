const CACHE_NAME="juyeok-cache-v1";
const FILES_TO_CACHE=[
  "forcast.html",
  "iching.json",
  "bamboo.mp3",
  "coin.mp3",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES_TO_CACHE)));
});
self.addEventListener("fetch",e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
