"use strict";

const Utils = {
    isBrowserCompatible: () => {
        if (!('serviceWorker' in navigator)) {
            console.warn('Service workers are not supported by this browser');
            return false;
        }
        return true
    }

    , get: async (url) => {
        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let response = await fetch(url, {
            method: 'GET',
            headers
        });

        return response.json();
    }
};

export default Utils;