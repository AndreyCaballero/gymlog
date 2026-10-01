var CACHE = 'gymlog-v1';
var SHELL = ['./', 'index.html', 'config.js', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return; // los envíos a Apps Script no se tocan
  var url = new URL(req.url);
  if (url.hostname.indexOf('script.google') > -1) return;
  if (url.origin === location.origin) {
    // misma app: red primero (siempre la versión nueva); si falla o tarda 3 s, la copia guardada
    e.respondWith(new Promise(function (resolve) {
      var done = false;
      function fallback() {
        caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('index.html'); }).then(function (r) { if (!done) { done = true; resolve(r || Response.error()); } });
      }
      var t = setTimeout(fallback, 3000);
      fetch(req).then(function (res) {
        clearTimeout(t);
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        if (!done) { done = true; resolve(res); }
      }).catch(function () { clearTimeout(t); fallback(); });
    }));
  } else {
    // fuentes y librerías externas: copia guardada y se actualiza por detrás
    e.respondWith(caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (res) { c.put(req, res.clone()); return res; }).catch(function () { return hit; });
        return hit || net;
      });
    }));
  }
});
