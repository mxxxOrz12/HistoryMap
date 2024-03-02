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
    map.addControl(new mapboxgl.NavigationControl());
    map.on('load', function () {
        // 获取所有图层的列表
        const layers = map.getStyle().layers;

        // 遍历图层列表
        layers.forEach(function (layer) {
            // 根据图层id或其他属性判断是否为路网图层
            if (layer.id.includes('road') || layer.id.includes('highway')) {
                // 隐藏路网图层
                map.setLayoutProperty(layer.id, 'visibility', 'none');
            }
        });
    });

    return map;
};

export const MapboxDark = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXh4eG9yejEyIiwiYSI6ImNsa2MyMjBvaTBhaHEzcnM0YmQ1d2Y2Y3EifQ.1Ez5HwcosSSBihZN23s9ZA';

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // style: 'mapbox://styles/mapbox/dark-v11',
        style: 'mapbox://styles/mapbox/navigation-night-v1',

        center: [117.1113, 34.1554],
        zoom: 4.8 // starting zoom
    });
    map.addControl(new MapboxLanguage({
        defaultLanguage: 'zh-Hans'
    }));
    map.addControl(new mapboxgl.FullscreenControl({ container: document.querySelector('body') }));
    map.addControl(new mapboxgl.NavigationControl());
    map.on('load', function () {
        // 获取所有图层的列表
        const layers = map.getStyle().layers;
        const countryLabelLayers = layers.filter(layer => layer.id.includes('label') && layer.id.includes('country'));

        // 移除找到的每一个图层
        countryLabelLayers.forEach(layer => {
            map.removeLayer(layer.id);
        });

        // 遍历图层列表
        layers.forEach(function (layer) {
            // 根据图层id或其他属性判断是否为路网图层
            if (layer.id.includes('road') || layer.id.includes('highway')) {
                // 隐藏路网图层
                map.setLayoutProperty(layer.id, 'visibility', 'none');
            }
        });
    });


    return map;
};
