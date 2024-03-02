
<script setup>
import { ref, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl';
import { MapboxDark } from '@/js/mapboxMap'
import xuzhou from '../../assets/json/HistoryXuzhou.json'

const map = ref(null);
let interval = null; // 用于控制动画的定时器
let index = 0; // 当前动画的索引
let isPaused = false; // 动画是否暂停的标志
let previousSourceId = null; // 上一个源ID
let previousLayerId = null; // 上一个图层ID
let zoomLevel = 7; // 初始缩放级别
xuzhou.features = xuzhou.features.reverse();

// 动画暂停函数
const animationPause = () => {
    isPaused = true; // 标记动画为暂停状态

};
const infoAlert = () => {
    alert('动画已暂停');

}
const playAnimation = () => {
    // 确保在动画已暂停且定时器存在时恢复动画
    if (isPaused && interval) {
        isPaused = false;
        return;
    }

    // 如果定时器不存在，则开始或重新开始动画
    if (!interval) {
        index = 0;
        previousSourceId = null;
        previousLayerId = null;

        map.value.flyTo({ center: [117.1113, 34.1554], zoom: zoomLevel });
        interval = setInterval(function () {
            if (isPaused) { // 如果动画暂停，则跳过此次迭代
                return;
            }
            if (index < xuzhou.features.length) {
                // 在添加新图层之前删除上一个图层和源
                if (previousSourceId && previousLayerId) {
                    map.value.removeLayer(previousLayerId);
                    map.value.removeSource(previousSourceId);
                }
                const featureToLoad = xuzhou.features[index];
                const sourceId = 'xuzhou' + index;
                const layerId = 'xuzhouLayer' + index;

                map.value.addSource(sourceId, {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [featureToLoad]
                    }
                });

                map.value.addLayer({
                    'id': layerId,
                    'type': 'fill',
                    'source': sourceId,
                    'layout': {},
                    'paint': {
                        'fill-color': '#FF0000', // 鲜艳的红色
                        'fill-opacity': 0.75,
                        'fill-outline-color': '#FFFFFF'
                    }
                });
                map.value.on('click', layerId, (e) => {
                    const clickedFeature = e.features[0];
                    const namech = clickedFeature.properties.name_ch;
                    const typech = clickedFeature.properties.type_ch;
                    const begyr = clickedFeature.properties.beg_yr;
                    const endyr = clickedFeature.properties.end_yr;
                    new mapboxgl.Popup()
                        .setLngLat([117.1113, 34.1554])
                        .setHTML(
                            `<p>名称 ${namech}</p>
                            <p>类型: ${typech}</p>
                            <p>开始时间: ${begyr}年</p>
                            <p>结束时间: ${endyr}年</p>`
                        )
                        .addTo(map.value);
                });
                previousSourceId = sourceId;
                previousLayerId = layerId;
                index++;
            } else {
                setTimeout(() => {
                    clearInterval(interval); // 所有要素都已加载，清除定时器
                    interval = null;
                    if (previousSourceId && previousLayerId) {
                        map.value.removeLayer(previousLayerId);
                        map.value.removeSource(previousSourceId);
                    }
                }, 0); // 使用setTimeout确保这段代码在当前执行栈之后运行
            }
        }, 2000);
    }
};
onMounted(() => {
    map.value = MapboxDark();
})





</script>
<template>
    <div>
        <el-row :gutter="20" class="header">
            <el-col :span="4" class="title">
                <h1 class="site-title">地图展示</h1>
            </el-col>
            <el-col :span="16">
                <el-menu class="el-menu-demo" mode="horizontal" background-color="#7c1c1c" text-color="#fff"
                    default-active="2">
                    <el-menu-item index="1">
                        <span><router-link to="/map" class="menu-link">历史地理</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span><router-link to="/map/special" class="menu-link">专题地图</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span><router-link to="/map/document" class="menu-link">历史文档</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span><router-link to="/" class="menu-link">回到首页</router-link></span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

        <div class="player">
            <div class="card-header">
                <el-button type="primary" @click=" playAnimation()">播放动画</el-button>
                <el-button type="primary" @click="infoAlert(); animationPause()">暂停</el-button>
            </div>
            <div class="card-content">
                <h2>徐州的历史简介</h2>
                <p>徐州，位于中国江苏省北部，是一座历史悠久的城市，有着超过2000年的历史。作为中国古代“九州”之一的徐州，在历史上曾是军事要塞和交通枢纽，拥有丰富的文化遗产。</p>
                <p>徐州是汉文化的重要发源地之一，汉文化元素在这里有着深厚的积淀。东汉的开国皇帝刘邦曾在徐州地区建立过都城，使得徐州成为了汉文化的重要传承地。</p>
                <p>除了汉文化，徐州还有许多名胜古迹，如彭祖园、云龙山、汉墓群等，这些都是徐州丰富历史文化的见证。</p>
                <p>近代以来，徐州经历了多次重要的历史事件，成为了中国近现代历史变革的见证者。今天的徐州不仅是一个历史文化名城，也是江苏省内重要的经济、教育和交通中心。</p>
            </div>
            <div class="card-footer">徐州历史行政边界变化展示</div>
        </div>
        <div id="map">
        </div>

    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card-header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
}

.card-content {
    padding: 20px;
    width: 500px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    font-size: 18px;
    letter-spacing: 2px;
}

.card-content h2 {
    color: #7c1c1c;
    margin-bottom: 15px;
}

.card-content p {
    text-indent: 2em;
}

.card-footer {
    padding: 15px;
    background-color: #fffdfd;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
}

.player {
    position: absolute;
    top: 100px;
    left: 20px;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

}

.player .el-button {
    margin: 10px 5px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.player .el-button:first-child {
    background-color: #3498db;
    color: white;
}

.player .el-button:last-child {
    background-color: #e74c3c;
    color: white;
}

/* 鼠标悬停时的按钮效果 */
.player .el-button:hover {
    filter: brightness(110%);
}


#map {
    position: relative;
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 0px;
}

.header {
    background-color: #7c1c1c;
    color: #fff;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
}

.title {
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.site-title {
    font-family: 'Arial', sans-serif;
    /* 修改标题字体 */
    font-weight: bold;
    font-size: 30px;
    /* 加粗标题字体 */
}

.menu-link {
    color: #fff;
    /* 修改菜单项字体颜色 */
    font-size: 20px;
    text-decoration: none;
}

.el-menu {
    border: none;
}

.el-menu-item {
    margin-right: 30px;
    /* 增加菜单项间距 */
    font-size: 18px;
    /* 调整菜单项字体大小 */
}

.el-menu-item:last-child {
    margin-right: 0;
}

.el-menu-demo .el-menu-item.is-active .menu-link {
    color: #42c1e8;
    font-weight: 600;
    text-decoration: none;
    /* 选中状态下的文字颜色 */
}
</style>
  

  