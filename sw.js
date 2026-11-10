/* HARD DECK service worker: keeps the app usable offline. Requests to other servers are never touched. */
const V = 'harddeck-3.0.0-54f431b6';
const SHELL = ['./', 'index.html', 'leaflet.js?v=54f431b6', 'geoid-sa.bin?v=54f431b6', 'manifest.webmanifest', 'icon-192.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const c = await caches.open(V);
    if (u.searchParams.has('v')) { const hit = await c.match(e.request); if (hit) return hit; }           // versioned files never change
    try { const r = await fetch(e.request); if (r.ok) c.put(e.request, r.clone()); return r; }
    catch (err) { const hit = await c.match(e.request) || (e.request.mode === 'navigate' ? await c.match('index.html') : null); if (hit) return hit; throw err; }
  })());
});
