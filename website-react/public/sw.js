const dataCacheName = 'podcasts-data-v2'
const cacheName = 'podcasts-v2'
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico'
]

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate')
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', function (e) {
  console.log('[Service Worker] Fetch', e.request.url)
  // TODO last search!
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request)
    })
  )
})
/* TODO Code from @Nicolas, check it out later!
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)
  if (url.pathname.endsWith('mp3')) {
    event.respondWith(serveMp3(url))
    return;
  }
  event.respondWith(
    caches.match(url.pathname)
      .then(response => response || fetch(url)
      )
  )
});
const serveMp3 = (url) => {
  caches.open(dataCacheName).then(cache => {
    cache.match(url).then(response => (
      response || cacheAndFetch(cache, url)
    ));
  });
};
const cacheAndFetch = (cache, url) => {
  cache.add(url);
  return fetch(url);
} */
