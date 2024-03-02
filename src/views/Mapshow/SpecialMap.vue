<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    const axiosdata = ref(null)

    const getdata = async () => {
        try {
            const response = await axios.get('http://localhost:8080/map/geometry?category=cntypts&start=200&end=222')
            axiosdata.value = response.data
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    onMounted(getdata);


</script>
<template>
    <div>
        <div>{{ axiosdata }}</div>
        <div>专题地图</div>
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