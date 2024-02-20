import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
export var map;

mapboxgl.accessToken = 'pk.eyJ1IjoibXh4eG9yejEyIiwiYSI6ImNsa2MyMjBvaTBhaHEzcnM0YmQ1d2Y2Y3EifQ.1Ez5HwcosSSBihZN23s9ZA' //去mapbox管⽹申请

export function loadMap(box) {
    map = new mapboxgl.Map({
        container: box, //id
        style: 'mapbox://styles/mapbox/streets-v12', 
        center: [116.397128, 39.916527],
        zoom: 5
    });
    map.addControl(new MapboxLanguage({
        defaultLanguage: 'zh-Hans'
    }));
    map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));
}