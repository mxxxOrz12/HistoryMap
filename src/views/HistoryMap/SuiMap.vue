<script>
import { map, loadMap } from '@/js/map/mapbox'
import { getdata_history } from '@/js/getData.js';

export default {
    name: "olMap",
    components: {

    },
    data() {
        return {
        };
    },
    mounted() {
        this.initMapbox();
        getdata_history(map,4);
    },
    methods: {
        history() {
            window.location.href = "/history";
        },
        initMapbox() {
            loadMap('mapbox')
            map.setCenter([116.397128, 39.916527]); //修改地图中心点
            map.setZoom(5); //设置缩放级别
        },
    }
}

</script>
<template>
    <el-page-header @back="history">
        <template #content>
            <span class="text-large font-600 mr-3"><b>隋唐地图</b></span>
        </template>
    </el-page-header>
    <div class="app-container">
        <div class="myMap">
            <div id="mapbox"></div>
        </div>
    </div>
</template>
<style>
#mapbox {
    top: 3vh;
    left: 0;
    bottom: 0;
    height: 90vh;
}
</style>