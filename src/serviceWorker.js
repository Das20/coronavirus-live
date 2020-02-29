var cacheName = 'coronavirus-live-v1.00';
var filesToCache = [
    '/assets/images/offline.png',
    '/offline.html',
    '/views/components/BottomBar.js',
    '/views/components/HeaderBar.js',
    '/views/pages/Map.js',
    '/views/pages/News.js',
    '/views/pages/Tables.js',
    '/manifest.json',
    '/services/Utils.js',
    '/favicon.ico',
    '/app.js',
    '/index.html',
    '/',
    '/assets/css/style.css',
    '/assets/images/icon-144.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request.url).catch(error => {
                // Return the offline page
                return caches.match('/offline.html');
            })
        );
    } else {
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});
