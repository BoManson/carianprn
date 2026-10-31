// CARIAN service worker: keeps a copy of the app on the phone so it opens without signal.
// Box data is NOT stored here (the app keeps it separately). Change CACHE name to force a refresh.
const CACHE = 'carian-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
// Online: always load the newest version (and save a copy). Offline: use the saved copy.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;   // Google Sheet requests pass straight through
  e.respondWith(
    fetch(r).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(r, c)); } return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('./')))
  );
});
