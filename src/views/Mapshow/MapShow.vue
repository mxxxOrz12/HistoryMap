<script setup>
import { treedata } from '../../js/treedata.js';
import { ref, reactive, onMounted } from 'vue';
import { getdata } from '@/js/getData.js';
import { Mapbox } from '@/js/mapboxMap'


const defaultProps = {
  children: 'children',
  label: 'label'
};

const table = ref(false);

const gridData = ref([
  { field: 'name_py', value: 'Baode Zhou' },
  { field: 'name_ch', value: '保德州' },
  { field: 'name_ft', value: '保德州' },
  { field: 'pres_loc', value: '山西保德县城西侧' },
  { field: 'type_ch', value: '州' },
  { field: 'lev_rank', value: '6' },
  { field: 'beg_yr', value: 1376 },
  { field: 'beg_rule', value: '4' },
  { field: 'end_yr', value: 1911 },
  { field: 'geo_src', value: 'FROM_AC' },
  { field: 'compiler', value: '' },
  { field: 'gecomplr', value: '' },
  { field: 'checker', value: '' },
  { field: 'ent_date', value: '' },
  { field: 'beg_chg_ty', value: '更名' },
  { field: 'end_chg_ty', value: '数据下限' }
]);


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

const show = ref(false)
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
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#7c1c1c" text-color="#fff"
        active-text-color="#000">
        <el-menu-item index="1">
          <span><router-link to="/" class="menu-link">历史地理</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
          <span><router-link to="/map/special" class="menu-link">专题地图</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
          <span><router-link to="#" class="menu-link">帮助文档</router-link></span>
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
        <span>图层选择</span>

        <n-drawer v-model:show="show" :width="502">
          <n-data-table :columns="columns" :data="gridData" :pagination="pagination" :bordered="false" />
        </n-drawer>
      </div>
      <n-button class="showbutton" @click="show = true">
        历史科普
      </n-button>
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

.showbutton {
  position: absolute;
  top: 140px;
  width: 200px;
  margin-top: 10px;
  margin-left: 2px;
  background-color: #7c1c1c;
  color: #fff;
  text-align: center;
  font-weight: 600px;
  font-size: 18px;
}

.tree {
  position: absolute;
  left: 0px;
  top: 180px;
  margin-top: 20px;
  width: 210px;
  height: 90vh;
  overflow: auto;
  background-color: #f0f2f5;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

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



.el-drawer__container {
  top: 0;
  height: 100%;
}

.el-button {
  margin-top: 20px;
}
</style>
  