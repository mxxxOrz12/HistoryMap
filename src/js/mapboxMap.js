import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language'
export const Mapbox = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXh4eG9yejEyIiwiYSI6ImNsa2MyMjBvaTBhaHEzcnM0YmQ1d2Y2Y3EifQ.1Ez5HwcosSSBihZN23s9ZA';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [116.397128, 39.916527],
        zoom: 5 // starting zoom
    });
    map.addControl(new MapboxLanguage({
        defaultLanguage: 'zh-Hans'
    }));
    map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));

    return map;
};
