import axios from 'axios';
import mapboxgl from 'mapbox-gl';


export const clusterCntyPoints = (map, url) => {
    function fetchData(url) {
        return axios.get(url).then((res) => {
            return res.data;
        });
    }

    fetchData(url).then((point) => {
        console.log(point);
        var cntyptslist = point['features'];
        map.addSource("earthquakes", {
            type: "geojson",
            data: point,
            cluster: true,
            clusterMaxZoom: 14, //最大缩放到群集点
            clusterRadius: 50 // 每一组点的半径（=50）
        });
        map.addLayer({
            id: "clusters",
            type: "circle",
            source: "earthquakes",
            filter: ["has", "point_count"],
            paint: {
                // 修改颜色方案
                "circle-color": [
                    "step",
                    ["get", "point_count"],
                    "rgba(124, 210, 144, 0.8)", // 淡绿色，点数小于100
                    100,
                    "rgba(34, 139, 34, 0.8)", // 深绿色，点数在100到750之间
                    750,
                    "rgba(160, 82, 45, 0.8)" // 棕色，点数大于或等于750
                ],
                "circle-radius": [
                    "step",
                    ["get", "point_count"],
                    20, // 当点数小于100时为20px圆
                    100, // 100以内
                    21, // 点计数在100到750之间时为21px圆
                    750, // 750以内
                    22 // 点计数大于或等于750时为22px圆
                ],
                // 修改外边框颜色以匹配新的颜色方案
                "circle-stroke-color": [
                    "step",
                    ["get", "point_count"],
                    "rgba(144, 238, 144, 0.4)", // 淡绿色边框
                    100,
                    "rgba(34, 139, 34, 0.4)", // 深绿色边框
                    750,
                    "rgba(160, 82, 45, 0.2)" // 棕色边框
                ],
                // 调整外边框晕染的范围以匹配新的颜色方案
                "circle-stroke-width": [
                    "step",
                    ["get", "point_count"],
                    5, // 当点数小于100时为5px晕染
                    100, // 100以内
                    6, // 点计数在100到750之间时为6px晕染
                    750, // 750以内
                    7 // 点计数大于或等于750时为7px晕染
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

            const clickedFeature = e.features[0];
            const coordinates = clickedFeature.geometry.coordinates.slice();
            const namech = clickedFeature.properties.namech;
            const typech = clickedFeature.properties.typech;
            const presloc = clickedFeature.properties.presloc;
            const begyr = clickedFeature.properties.begyr;
            const endyr = clickedFeature.properties.endyr;
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `<p>namech: ${namech}</p>
                <p>typech: ${typech}</p>
                <p>presloc: ${presloc}</p>
                <p>begyr: ${begyr}</p>
                <p>endyr: ${endyr}</p>`
                )
                .addTo(map);
        });
        map.on("mouseenter", "clusters", function () {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "clusters", function () {
            map.getCanvas().style.cursor = "";
        });
    })
}

export const clusterPrefptsPoints = (map, url) => {
    function fetchData(url) {
        return axios.get(url).then((res) => {
            return res.data;
        });
    }

    fetchData(url).then((point) => {
        map.addSource("prefpts", {
            type: "geojson",
            data: point,
            cluster: true,
            clusterMaxZoom: 14, //最大缩放到群集点
            clusterRadius: 50 // 每一组点的半径（=50）
        });
        // 外围有数字的圆圈，加晕染
        map.addLayer({
            id: "prefclusters",
            type: "circle",
            source: "prefpts",
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
            id: "prefcluster-count",
            type: "symbol",
            source: "prefpts",
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
        map.loadImage('/src/icon/point1.png', function (error, image) {
            map.addImage('pref', image);
            map.addLayer({
                id: "prefunclustered-point",
                type: "symbol",
                source: "prefpts",
                filter: ["!", ["has", "point_count"]],
                layout: {
                    "icon-image": 'pref', // 指定图标的名称
                    "icon-size": 0.1, // 图标大小，默认为 1
                    "icon-offset": [0, 0], // 图标偏移量，默认为 [0, 0]
                    "icon-allow-overlap": true // 允许图标重叠，默认为 true
                },
                paint: {
                    "icon-opacity": 0.8 // 图标透明度，默认为 1
                }

            });
        })
        // 单击时检查群集
        map.on("click", "prefclusters", function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ["prefclusters"]
            });
            var clusterId = features[0].properties.cluster_id;
            map
                .getSource("prefpts")
                .getClusterExpansionZoom(clusterId, function (err, zoom) {
                    if (err) return;
                    map.easeTo({
                        center: features[0].geometry.coordinates,
                        zoom: zoom
                    });
                });
        });
        // 单击时检查未聚类的点
        map.on('click', 'prefunclustered-point', (e) => {

            const clickedFeature = e.features[0];
            const coordinates = clickedFeature.geometry.coordinates.slice();
            const namech = clickedFeature.properties.namech;
            const typech = clickedFeature.properties.typech;
            const presloc = clickedFeature.properties.presloc;
            const begyr = clickedFeature.properties.begyr;
            const endyr = clickedFeature.properties.endyr;

            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `<p>namech: ${namech}</p>
            <p>typech: ${typech}</p>
            <p>presloc: ${presloc}</p>
            <p>begyr: ${begyr}</p>
            <p>endyr: ${endyr}</p>`
                )
                .addTo(map);
        });

        map.on("mouseenter", "prefclusters", function () {
            map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "prefclusters", function () {
            map.getCanvas().style.cursor = "";
        });
    })
}


export const prefpgn = (map, url) => {
    function fetchData(url) {
        return axios.get(url).then((res) => {
            return res.data;
        });
    }
    fetchData(url).then((pref) => {
        map.addSource("prefpgn", {
            type: "geojson",
            data: pref,
        });
        map.addLayer({
            id: "prefpgn",
            type: "fill",
            source: "prefpgn",
            paint: {
                "fill-color": '#C00000',
                "fill-opacity": 0.8
            }
        });
        map.on('click', 'prefpgn', (e) => {

            const clickedFeature = e.features[0];
            let coordinates;
            if (clickedFeature.geometry.coordinates[0][0][0].length === 2) {

                coordinates = clickedFeature.geometry.coordinates[0][0][0].slice();
            }
            else {
                coordinates = clickedFeature.geometry.coordinates[0][0].slice();
            }
            const namech = clickedFeature.properties.namech;
            const typech = clickedFeature.properties.typech;
            const presloc = clickedFeature.properties.presloc;
            const begyr = clickedFeature.properties.begyr;
            const endyr = clickedFeature.properties.endyr;

            // Ensure that if the map is zoomed out such that
            // multiple copies of the feature are visible, the
            // popup appears over the copy being pointed to.


            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(
                    `<p>namech: ${namech}</p>
            <p>typech: ${typech}</p>
            <p>presloc: ${presloc}</p>
            <p>begyr: ${begyr}</p>
            <p>endyr: ${endyr}</p>`
                )
                .addTo(map);
        });


    })


}