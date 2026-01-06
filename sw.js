self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("forms-cache-v1").then(cache => cache.addAll([
      "./index.html",
      "./manifest.json",
      "./sw.js"
    ]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
