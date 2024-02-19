<script setup>
import { treedata } from '../../js/treedata.js';
import { ref, reactive, onMounted, watch, nextTick } from 'vue';
import { getdata } from '@/js/getData.js';
import { Mapbox } from '@/js/mapboxMap'
import * as echarts from 'echarts';
const showdown = ref(false);
watch(showdown, (newValue) => {
  if (newValue) {
    // 确保DOM更新完成
    nextTick().then(() => {
      initChart();
    });
  }
});
const defaultProps = {
  children: 'children',
  label: 'label'
};

const initChart = () => {
  var chartDom = document.getElementById('dynasty-data');
  if (chartDom) {
    var myChart = echarts.init(chartDom);
    myChart.setOption({
      title: {
        text: '历史时期各级行政单位数量', // 图表标题
        textStyle: {
          fontSize: 20 // 标题字体大小
        }
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '县级点', '州级点', '州级行政面'],
          ['商周', 345, 30, 4],
          ['秦', 308, 42, 17],
          ['汉', 2535, 428, 148],
          ['晋三国', 2987, 1391, 413],
          ['隋唐', 2987, 1947, 1015],
          ['五代十国', 385, 134, 154],
          ['宋', 1880, 939, 750],
          ['元', 876, 603, 508],
          ['明', 1299, 425, 711],
          ['清', 665, 314, 630]
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 14,

          fontWeight: 'bold'
        }
      },
      yAxis: {
        axisLabel: {
          fontSize: 16 // 设置Y轴坐标标签的字体大小
        }
      },
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    });
  }
};






const changecheck = (node, l) => {
  const toggleChecked = (node) => {
    node.ischeck = !node.ischeck;
    if (node.children) {
      node.children.forEach(child => {
        toggleChecked(child);
      });
    }
  };

  const setChildrenChecked = (node, checked) => {
    if (node.children) {
      node.children.forEach(child => {
        child.ischeck = checked;
        setChildrenChecked(child, checked);
      });
    }
  };

  if (node.level === 1) {
    toggleChecked(node);
    setChildrenChecked(node, node.ischeck);
  } else if (node.level === 2) {
    toggleChecked(node);
    setChildrenChecked(node, node.ischeck);
  } else {
    toggleChecked(node);
  }

  if (node.ischeck == true) {
    getdata(map.value);
  } else {
    // 获取地图中的所有图层和源
    const layers = map.value.getStyle().layers;
    const sources = map.value.getStyle().sources;
    // 遍历并删除图层
    layers.forEach(layer => {
      if (layer.id === 'unclustered-point' || layer.id === 'cluster-count' ||
        layer.id === 'clusters' || layer.id === 'prefpgn' || layer.id === 'prefpts' || layer.id === 'prefclusters'
        || layer.id === 'prefcluster-count' || layer.id === 'prefunclustered-point') {
        map.value.removeLayer(layer.id);
      }
    });
    // 遍历并删除源
    for (const sourceId in sources) {
      if (sourceId === 'earthquakes' || sourceId === 'prefpgn' || sourceId === 'prefpts') {
        map.value.removeSource(sourceId);
      }
    }
  }


};

const showright = ref(false);
const createColumns = () => {
  return [
    {
      title: '字段',
      key: 'field'
    },
    {
      title: '值',
      key: 'value'
    },

  ]
}
const data = ref([])
const columns = reactive(createColumns())
const map = ref(null);
onMounted(() => {
  map.value = Mapbox();

});



</script>

<template>
  <el-row :gutter="20" class="header">
    <el-col :span="4" class="title">
      <h1 class="site-title">地图展示</h1>
    </el-col>
    <el-col :span="16">
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#7c1c1c" text-color="#fff" default-active="1">
        <el-menu-item index="1">
          <span><router-link to="/" class="menu-link">历史地理</router-link></span>
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

  <div class="container">
    <div class="sidebar">
      <div class="sidebar-head">
        <n-button class="showbutton" @click="showright = true">
          历史科普
        </n-button>
        <n-button class="showbutton" @click="showdown = true">
          数据展示
        </n-button>
        <span style="font-size: 22px;color: #8b4513;">图层选择</span>
        <n-drawer v-model:show="showright" :width="600" title="中国历史朝代科普" class="history-drawer">
          <div class="dynasty-info">
            <h2>商周 (约1600 BC - 256 BC)</h2>
            <p>周朝继承了商朝，分为西周和东周两个时期，创立了周礼制度和封建制。</p>

            <h2>秦朝 (221 BC - 206 BC)</h2>
            <p>秦朝是中国历史上第一个大一统帝国，由秦始皇建立，实行中央集权制度。</p>

            <h2>汉朝 (206 BC - 220 AD)</h2>
            <p>汉朝分为西汉和东汉，是中国历史上的黄金时期之一，文化和经济都有很大发展。</p>

            <h2>晋·三国 (220 AD - 420 AD)</h2>
            <p>三国时期是魏、蜀、吴三国鼎立的战国时期，而西晋的建立标志着三国时代的结束，进入晋朝统一的时期。</p>

            <h2>隋唐 (581 AD - 907 AD)</h2>
            <p>隋朝统一了长期分裂的中国，奠定了隋唐盛世的基础。唐朝继承并发扬光大，文化和经济达到了历史高峰。</p>
            <h2>五代十国 (907 AD - 979 AD)</h2>
            <p>唐朝之后的混乱时期，中国北方历经五代更迭，十国并立，政治分裂但文化仍然绵延不绝。</p>

            <h2>宋朝 (960 AD - 1279 AD)</h2>
            <p>宋朝经济发达，商业繁荣，科技进步，是中国古代文化的又一巅峰，尤其在文学、绘画及科技发明方面。</p>
            <h2>元朝 (1271 AD - 1368 AD)</h2>
            <p>由蒙古族建立的统一中国的大帝国，开启了中国历史上的元代，是中国历史上第一个由非汉族完全建立的封建中央集权王朝。</p>

            <h2>明朝 (1368 AD - 1644 AD)</h2>
            <p>明朝是中国最后一个由汉族建立的封建王朝，期间完成了《永乐大典》，并修建了著名的万里长城。</p>

            <h2>清朝 (1644 AD - 1912 AD)</h2>
            <p>清朝是中国历史上最后一个封建王朝，同治、光绪年间开始了一系列的现代化改革，最终结束了中国的封建王朝时代。</p>
          </div>
        </n-drawer>


        <n-drawer v-model:show="showdown" :height="500" title="数据展示" placement="bottom" class="history-drawer">
          <div id="dynasty-data">

          </div>
        </n-drawer>
      </div>

      <el-tree class="tree" :data="treedata" show-checkbox node-key="id" :props="defaultProps" @check="changecheck"
        st></el-tree>
    </div>

    <div id="map"></div>
  </div>
</template>
  
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar .showbutton {
  position: relative;
  left: 0px;
  width: 200px;
  margin-bottom: 20px;
  height: 40px;
  padding: 10px 0;
  background-color: #8b4513;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Times New Roman', serif;
  border: 2px solid #fff;
  border-radius: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.showbutton:hover {
  background-color: #a0522d;
  border-color: #f8f8f8;
}


.tree {
  position: absolute;
  left: 0px;
  top: 240px;
  margin-top: 20px;
  width: 210px;
  height: 71vh;
  overflow: auto;
  background-color: #f0f2f5;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

}

#dynasty-data {
  padding: 20px;
  background-color: #f4f1ed;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.history-drawer .dynasty-info {
  padding: 20px;
  background-color: #f4f1ed;
  /* 浅棕色的纸张效果背景 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.history-drawer .dynasty-info h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #a97055;
  border-bottom: 3px solid #e2d5c3;
  padding-bottom: 5px;
}

.history-drawer .dynasty-info p {
  text-indent: 2em;
  color: #5d4b3c;
  font-family: 'Times New Roman', serif;
  font-size: 18px;
  line-height: 1.8;
  font-weight: bold;
}

.n-drawer {
  --n-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  --n-color: #f4f1ed;
  /* 抽屉背景色与内容背景色一致 */
  --n-title-text-color: #a97055;
  /* 标题颜色与内容标题一致 */
  --n-close-color-hover: #c6c6c6;
}

#map {
  position: relative;
  width: 100%;
  height: auto;
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

.sidebar-head {
  color: #000000;
  font-size: 24px;
  text-align: center;
  justify-content: center;
  margin-top: 10px;
  font-weight: 550;

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


.container {
  display: flex;
}

.sidebar {
  display: flex;
  background-color: #ffffff;
  height: 90vh;
  width: 240px;
  float: left;
  margin-right: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

}

.sidebar-scrollbar {
  height: 100%;
  background-color: #f0f2f5;
  /* 添加侧边栏背景颜色 */
  border-radius: 8px;
  /* 圆角 */
  overflow: auto;
}

.sidebar .el-scrollbar__wrap {
  height: calc(75vh - 20px);
  overflow: auto;
  background-color: #864444;

  /* 添加背景颜色 */
}



.el-tree {
  margin-top: 20px;
  /* 设置树形框与父元素的间距 */
  border: 1px solid #ccc;
  /* 设置树形框边框样式 */
  border-radius: 4px;
  /* 设置树形框边框圆角 */
}

/* 设置树形框节点的样式 */
.el-tree-node {
  padding: 10px;
  /* 设置节点的内边距 */
  border-bottom: 1px solid #eee;
  /* 设置节点之间的分隔线 */
}

/* 设置树形框节点激活时的样式 */
.el-tree-node.is-current {
  background-color: #e6f7ff;
  /* 设置节点激活时的背景色 */
}

/* 设置树形框节点复选框的样式 */
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  /* 设置复选框选中时的背景色 */
  border-color: #409eff;
  /* 设置复选框选中时的边框颜色 */
}

/* 选中状态下的样式 */
.el-menu-demo .el-menu-item.is-active {
  color: #409eff;
  text-decoration: none;
  /* 选中状态下的背景颜色 */
}

.el-menu-demo .el-menu-item.is-active .menu-link {
  color: #42c1e8;
  font-weight: 600;
  text-decoration: none;
  /* 选中状态下的文字颜色 */
}


/* 鼠标悬停在选中状态下的菜单项文字上时的样式 */
.el-menu-demo .el-menu-item.menu-link:hover {
  color: #fff;
  /* 鼠标悬停时的文字颜色 */
}
</style>
  