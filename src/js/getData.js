import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // 导入 Mapbox 样式文件
import {
    treedata
} from '../js/treedata';
import cnty from '../icon/县.png';
import zhou from '../icon/point1.png';
import axios from 'axios';
import {
    clusterCntyPoints,
    clusterPrefptsPoints,
    prefpgn
} from '../js/clusterPoint.js';

mapboxgl.accessToken = 'pk.eyJ1IjoibXh4eG9yejEyIiwiYSI6ImNsa2MyMjBvaTBhaHEzcnM0YmQ1d2Y2Y3EifQ.1Ez5HwcosSSBihZN23s9ZA';
export const getdata = (map) => {

    // 清空除底图外的所有覆盖物
    const urlbase = 'http://localhost:8080/map/geometry?';
    const dynastylist = treedata[0]['children'];


    for (let i = 0; i < dynastylist.length; i++) {
        if (dynastylist[i]['children'][2]['ischeck'] === true) { // 处理 prefpgn 数据
            const url = `${urlbase}category=prefpgn&start=${dynastylist[i]['timerange'][0]}&end=${dynastylist[i]['timerange'][1]}`;
            prefpgn(map, url);

        }

        if (dynastylist[i]['children'][1]['ischeck'] === true) { // 处理 prefpts 数据
            const url = `${urlbase}category=prefpts&start=${dynastylist[i]['timerange'][0]}&end=${dynastylist[i]['timerange'][1]}`;
            clusterPrefptsPoints(map, url);
        }
        if (dynastylist[i]['children'][0]['ischeck'] === true) { // 处理 cntypts 数据
            const url = `${urlbase}category=cntypts&start=${dynastylist[i]['timerange'][0]}&end=${dynastylist[i]['timerange'][1]}`;
            clusterCntyPoints(map, url);
        }
    }
};

export const getdata_history = (map ,number) => {

    console.log(number);
    // 清空除底图外的所有覆盖物
    const urlbase = 'http://localhost:8080/map/geometry?';
    const dynastylist = treedata[0]['children'];
    const timerange = dynastylist[number]['timerange'];

    const url_1 = `${urlbase}category=prefpgn&start=${timerange[0]}&end=${timerange[1]}`;
    prefpgn(map, url_1);
    const url_2 = `${urlbase}category=prefpts&start=${timerange[0]}&end=${timerange[1]}`;
    clusterPrefptsPoints(map, url_2);
    const url_3 = `${urlbase}category=cntypts&start=${timerange[0]}&end=${timerange[1]}`;
    clusterCntyPoints(map, url_3);
    console.log(timerange);
};

// Helper function to create marker element
function createMarkerElement(iconUrl) {
    const markerElement = document.createElement('div');
    markerElement.style.backgroundImage = `url(${iconUrl})`;
    markerElement.style.width = '30px';
    markerElement.style.height = '30px';
    return markerElement;
}