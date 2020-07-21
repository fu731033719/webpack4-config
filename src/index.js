console.log('lot');
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => {
                console.log('service-worker registration');
            })
            .catch(err => {
                console.error(err);
            })
    })
}