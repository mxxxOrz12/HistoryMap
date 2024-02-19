<script setup>
</script>


<template>
    <div>
        <header class="header">
            <router-link to="/" class="logo">中国历史电子地图平台</router-link>

            <nav class="navbar">
                <router-link to="/" class="active">主页</router-link>
                <router-link to="/map">地图展示</router-link>
                <router-link to="/history">历史讲解</router-link>
                <router-link to="/knowledge">历史AI</router-link>
                <router-link to="/profile">我的</router-link>
            </nav>
            <div>
                <router-link to="/login" class="btn-head">登录</router-link>
                <router-link to="/register" class="btn-head">注册</router-link>
            </div>
        </header>
        <router-view></router-view>

        <section class="home">
            <div class="home-content">
                <h1>千年舆图——</h1>
                <h1>中国历史电子地图平台</h1>
                <p>中国历史电子地图平台是一个专门为中国历史爱好者打造的网站，我们提供了丰富的历史地图资源，以及历史事件的详细介绍，帮助用户更好的了解中国历史。</p>

                <div class="btn-box">
                    <router-link to="/map" class="btn">开始</router-link>
                    <router-link to="/more" class="btn">更多</router-link>
                </div>
            </div>

        </section>


        <img class="carousel-img" src="../assets/pic/qin.jpg" style="background-color: black;">
        <img class="carousel-img" src="../assets/pic/han.jpg">
        <img class="carousel-img" src="../assets/pic/tang.jpg"
            style="background-color: rgb(216,181,149); mix-blend-mode: multiply;">
        <img class="carousel-img" src="../assets/pic/ming.jpg">



        <footer class="footer">
            <div class="footer-content">
                <p>小组成员：马骁 韦娜</p>
                <p>千年舆图——中国历史电子地图平台 &copy; 2024</p>
            </div>
        </footer>
    </div>
</template>
<style scoped src="../css/Home.css"></style>
