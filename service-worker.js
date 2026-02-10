const CACHE_NAME = "safepath-pwa-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./leaflet/leaflet.css",
  "./leaflet/leaflet.js",
  "./leaflet/images/marker-icon.png",
  "./leaflet/images/marker-shadow.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE_NAME ? caches.delete(k) : Promise.resolve())))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((resp) => {
      if (req.method === "GET" && resp.ok) {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
      }
      return resp;
    }).catch(() => caches.match("./index.html")))
  );
});

// RUNTIME TILE CACHING (Optional)
// Leaflet uses OpenStreetMap tiles by default. Caching map tiles offline can violate some providers' terms.
// If you want runtime tile caching, consider using your own tile provider with explicit offline terms.
