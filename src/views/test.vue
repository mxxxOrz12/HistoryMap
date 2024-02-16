<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';


mapboxgl.accessToken = 'pk.eyJ1IjoibXh4eG9yejEyIiwiYSI6ImNsa2MyMjBvaTBhaHEzcnM0YmQ1d2Y2Y3EifQ.1Ez5HwcosSSBihZN23s9ZA';
const mapContainer = ref(null);
const url = "http://localhost:8080/map/geometry?category=cntypts&start=-5000&end=-221";
function fetchData(url) {
    return axios.get(url).then((res) => {
        return res.data;
    });
}

onMounted(() => {
    const map = new mapboxgl.Map({
        container: mapContainer.value,
        zoom: 0.3,
        center: [0, 20],
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        projection: 'mercator'
    });
    map.addControl(new mapboxgl.NavigationControl());

    fetchData(url).then((point) => {
        map.on("load", function () {
            // 从GeoJSON数据添加一个新的源并设置“cluster”选项为true。GL-JS将把point_count属性添加到源数据中。
            map.addSource("earthquakes", {
                type: "geojson",
                data: point,
                cluster: true,
                clusterMaxZoom: 14, //最大缩放到群集点
                clusterRadius: 50 // 每一组点的半径（=50）
            });
            // 外围有数字的圆圈，加晕染
            map.addLayer({
                id: "clusters",
                type: "circle",
                source: "earthquakes",
                filter: ["has", "point_count"],
                paint: {
                    //*蓝色，当点数小于100时为20px圆
                    //*点计数在100到750之间时为黄色，21px圆
                    //*点计数大于或等于750时为22像素的粉红色圆圈
                    "circle-color": [
                        "step",
                        ["get", "point_count"],
                        "rgba(1, 197, 222, 0.8)", // 修改为历史主题的蓝色
                        100,
                        "rgba(218, 165, 32, 0.8)", // 修改为历史主题的黄色
                        750,
                        "rgba(205, 92, 92, 0.8)" // 修改为历史主题的红色
                    ],
                    "circle-radius": [
                        "step",
                        ["get", "point_count"],
                        20, //蓝色，当点数小于100时为20px圆
                        100, //对应上面circle-color 数字，意思为100以内
                        21, //点计数在100到750之间时为黄色，21px圆
                        750, //对应上面circle-color 数字，意思为750以内
                        22 //点计数大于或等于750时为22像素的粉红色圆圈
                    ],
                    // 这个是外边框的颜色 circle-stroke-color这个对应了上面circle-color
                    "circle-stroke-color": [
                        "step",
                        ["get", "point_count"],
                        "rgba(112, 128, 144, 0.4)", // 修改为历史主题的边框颜色
                        100,
                        "rgba(218, 165, 32, 0.4)", // 修改为历史主题的边框颜色
                        750,
                        "rgba(205, 92, 92, 0.2)" // 修改为历史主题的边框颜色
                    ],
                    // 这个是外边框晕染的范围
                    "circle-stroke-width": [
                        "step",
                        ["get", "point_count"],
                        5, //蓝色晕染长度，当点数小于100时为5px晕染
                        100, //对应上面circle-color 数字，意思为100以内
                        6, //点计数在100到750之间时为黄色，6px晕染
                        750, //对应上面circle-color 数字，意思为750以内
                        7 //点计数大于或等于750时为7px像素的粉红色晕染
                    ]
                }

            });
            //聚合图圆圈中的数字
            map.addLayer({
                id: "cluster-count",
                type: "symbol",
                source: "earthquakes",
                filter: ["has", "point_count"],
                layout: {
                    "text-field": "{point_count_abbreviated}",
                    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                    "text-size": 12
                },
                // 添加这个就可以改变圆圈内字样式，这里我改变了他的颜色
                paint: {
                    "text-color": "#fff",
                    "text-opacity": 1
                }
            });
            // 聚合图中没有数字的显示小圆点
            map.addLayer({
                id: "unclustered-point",
                type: "circle",
                source: "earthquakes",
                filter: ["!", ["has", "point_count"]],
                paint: {
                    "circle-color": "#ff0000",
                    "circle-radius": 6,
                    "circle-stroke-width": 2,
                    "circle-stroke-color": "#fff"
                }
            });

            // 单击时检查群集
            map.on("click", "clusters", function (e) {
                var features = map.queryRenderedFeatures(e.point, {
                    layers: ["clusters"]
                });
                var clusterId = features[0].properties.cluster_id;
                map
                    .getSource("earthquakes")
                    .getClusterExpansionZoom(clusterId, function (err, zoom) {
                        if (err) return;
                        map.easeTo({
                            center: features[0].geometry.coordinates,
                            zoom: zoom
                        });
                    });
            });

            // 单击时检查未聚类的点
            map.on('click', 'unclustered-point', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const mag = e.features[0].properties.mag;
                const tsunami =
                    e.features[0].properties.tsunami === 1 ? 'yes' : 'no';

                // Ensure that if the map is zoomed out such that
                // multiple copies of the feature are visible, the
                // popup appears over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML(
                        `<p>namech: 1</p>`
                        //     <p>nameft: ${cntyptslist[j]['nameft']}</p>
                        //     <p>namepy: ${cntyptslist[j]['namepy']}</p>
                        //     <p>typech: ${cntyptslist[j]['typech']}</p>
                        //     <p>presloc: ${cntyptslist[j]['presloc']}</p>
                        //     <p>begyr: ${cntyptslist[j]['begyr']}</p>
                        //     <p>begrule: ${cntyptslist[j]['begrule']}</p>
                        //     <p>begchgty: ${cntyptslist[j]['begchgty']}</p>
                        //     <p>endyr: ${cntyptslist[j]['endyr']}</p>
                        //     <p>endrule: ${cntyptslist[j]['endrule']}</p>
                        //     <p>endchgty: ${cntyptslist[j]['endchgty']}</p>
                        //     <p>geosrc: ${cntyptslist[j]['geosrc']}</p>
                        //     <p>compiler: ${cntyptslist[j]['compiler']}</p>
                        //     <p>gecomplr: ${cntyptslist[j]['gecomplr']}</p>
                        //     <p>checker: ${cntyptslist[j]['checker']}</p>
                    )
                    .addTo(map);
            });

            map.on("mouseenter", "clusters", function () {
                map.getCanvas().style.cursor = "pointer";
            });
            map.on("mouseleave", "clusters", function () {
                map.getCanvas().style.cursor = "";
            });
        });
    });


});

</script>

<template>
    <div ref="mapContainer" id="map"></div>
</template>

<style scoped>
body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
