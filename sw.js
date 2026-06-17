const CACHE_NAME = 'turnos-v1';
const urlsToCache = [
  '/turnos-halterofilia/',
  '/turnos-halterofilia/index.html',
  '/turnos-halterofilia/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
