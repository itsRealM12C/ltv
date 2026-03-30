self.addEventListener('fetch', (event) => {
    let requestUrl = new URL(event.request.url);

    // If the request is for this specific stream host
    if (requestUrl.host.includes('connectmedia.hu')) {
        // Force the replacement logic on every sub-request (TS segments)
        if (requestUrl.search.includes('110102')) {
            const newUrl = event.request.url.replace('v=5', 'v=5iip:');
            event.respondWith(fetch(newUrl, { mode: 'cors' }));
            return;
        }
    }
    
    event.respondWith(fetch(event.request));
});
