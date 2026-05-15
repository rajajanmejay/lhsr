const CACHE_NAME = 'lhsr-cache-v1';
const urlsToCache = [
  '/lhsr/',
  '/lhsr/index.html',
  '/lhsr/manifest.json',
  '/lhsr/logos/lhsr-logo-white.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
