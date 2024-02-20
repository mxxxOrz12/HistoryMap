<script>
let n = 1;
const updateNumber = (value) => {
    window.number = value;
}
export let number = n;
</script>

<template>
    <div class="out">
        <!-- <img class="carousel-img" src="../assets/pic/background.jpg" style="background-color: black;"> -->

        <div style="padding-top: 0px; background-color: white; padding-bottom: 48px;">
            <div class="bg-img-center column justify-center items-center q-py-xl">
                <h1 class="size-40 title text-black q-mt-lg q-pb-none q-mb-none">
                    中国历史地图
                </h1>
            </div>
        </div>
        <el-row class="mb-4">
            <el-col :span="23">
                <div class="grid-content ep-bg-purple-light">
                    <router-link to="/">
                        <el-button round color="#c10015" style="float:right">
                            <b>返回首页</b>
                        </el-button>
                    </router-link>
                </div>
            </el-col>
        </el-row>
        <div class="q-mx-sm row justify-center">
            <router-link to="/history/zhou">
                <button @click="" tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                商周地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/qin">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                秦朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/han">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                汉朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/jin">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                晋三国地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/sui">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                隋唐地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/wu">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                五代十国地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/song">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                宋朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/yuan">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                元朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/ming">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                明朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
            <router-link to="/history/qing">
                <button tabindex="0" type="button" role="button" class="q-btn non-selectable no-outline q-ma-xs 
            q-btn--rectangle bg-grey-8 text-white q-btn--actionable">
                    <span class="q-btn__wrapper col row">
                        <span class="q-btn__content text-center items-center justify-center row">
                            <span class="block">
                                清朝地图
                            </span>
                        </span>
                    </span>
                </button>
            </router-link>
        </div>

        <ul class="timeline">
            <!-- Item 1 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">史前</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>旧石器时代</b></div>
                    <div class="desc"><b>新石器时代</b></div>
                </div>
            </li>
            <!-- Item 2 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">传说</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>三皇五帝</b></div>
                </div>
            </li>
            <!-- Item 3 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">夏</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>夏</b></div>
                </div>
            </li>
            <!-- Item 4 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">商</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>商</b></div>
                </div>
            </li>
            <!-- Item 5 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">西周</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc">
                        <router-link to="/history/zhou">
                            <a target="_blank" class="q-mr-md q-my-sm link"><b>商周地图</b></a>
                        </router-link>
                        <b>西周</b>
                    </div>
                </div>
            </li>
            <!-- Item 6 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">春秋</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>春秋</b></div>
                </div>
            </li>
            <!-- Item 7 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">战国</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>战国</b></div>
                </div>
            </li>
            <!-- Item 8 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">秦</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>秦 </b>
                        <router-link to="/history/qin">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b>秦朝地图</b></a>
                        </router-link>
                        <div class="time-number">-221年 - -207年</div>
                    </div>
                </div>
            </li>
            <!-- Item 9 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">汉</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><router-link to="/history/han"><a target="_blank" href=""
                                class="q-mr-md q-my-sm link"><b>汉朝地图</b></a></router-link>
                        <b>西汉</b>
                        <div class="time-number">-206年 - 8年</div>
                    </div>
                    <div class="desc"><b>新</b>
                        <div class="time-number">9年 - 23年</div>
                    </div>
                    <div class="desc"><b>东汉</b>
                        <div class="time-number">25年 - 220年</div>
                    </div>
                </div>
            </li>
            <!-- Item 10 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">三国</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>三国</b><router-link to="/history/jin">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b> 晋三国地图</b></a></router-link>
                        <div class="time-number">220年 - 280年</div>
                    </div>
                    <div class="desc"><b>魏</b>
                        <div class="time-number">220年 - 265年</div>
                    </div>
                    <div class="desc"><b>蜀</b>
                        <div class="time-number">221年 - 263年</div>
                    </div>
                    <div class="desc"><b>吴</b>
                        <div class="time-number">222年 - 280年</div>
                    </div>
                </div>
            </li>
            <!-- Item 11 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">晋</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>西晋</b>
                        <div class="time-number">265年 - 317年</div>
                    </div>
                    <div class="desc"><b>五代十六国</b>
                        <div class="time-number">304年 - 439年</div>
                    </div>
                    <div class="desc"><b>东晋</b>
                        <div class="time-number">317年 - 420年</div>
                    </div>
                </div>
            </li>
            <!-- Item 12 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">南北朝</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>南北朝</b>
                        <div class="time-number">420年 - 589年</div>
                    </div>
                    <div class="desc"><b>宋</b>
                        <div class="time-number">420年 - 479年</div>
                    </div>
                    <div class="desc"><b>齐</b>
                        <div class="time-number">479年 - 502年</div>
                    </div>
                    <div class="desc"><b>梁</b>
                        <div class="time-number">502年 - 557年</div>
                    </div>
                    <div class="desc"><b>陈</b>
                        <div class="time-number">557年 - 582年</div>
                    </div>
                    <div class="desc"><b>北朝</b>
                        <div class="time-number">386年 - 581年</div>
                    </div>
                    <div class="desc"><b>北魏</b>
                        <div class="time-number">386年 - 534年</div>
                    </div>
                    <div class="desc"><b>东魏</b>
                        <div class="time-number">534年 - 550年</div>
                    </div>
                    <div class="desc"><b>西魏</b>
                        <div class="time-number">535年 - 557年</div>
                    </div>
                    <div class="desc"><b>北齐</b>
                        <div class="time-number">550年 - 577年</div>
                    </div>
                    <div class="desc"><b>北周</b>
                        <div class="time-number">557年 - 581年</div>
                    </div>
                </div>
            </li>
            <!-- Item 12 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">隋</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>隋</b>
                        <div class="time-number">535年 - 557年</div>
                    </div>
                </div>
            </li>
            <!-- Item 13 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">唐</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>唐</b><router-link to="/history/sui">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b> 隋唐地图</b></a></router-link>
                        <div class="time-number">618年 - 907年</div>
                    </div>
                </div>
            </li>
            <!-- Item 14 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">五代十国</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc">
                        <router-link to="/history/wu">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b>五代十国地图</b>
                            </a>
                        </router-link>
                        <b>五代十国</b>
                        <div class="time-number">907年 - 979年</div>
                    </div>
                    <div class="desc"><b>后梁</b>
                        <div class="time-number">907年 - 979年</div>
                    </div>
                    <div class="desc"><b>后晋</b>
                        <div class="time-number">936年 - 946年</div>
                    </div>
                    <div class="desc"><b>后汉</b>
                        <div class="time-number">947年 - 950年</div>
                    </div>
                    <div class="desc"><b>后周</b>
                        <div class="time-number">951年 - 960年</div>
                    </div>
                </div>
            </li>
            <!-- Item 15 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">宋</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>北宋</b><router-link to="/history/song">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b> 宋朝地图</b></a></router-link>
                        <div class="time-number">960年 - 1127年</div>
                    </div>
                    <div class="desc"><b>辽</b>
                        <div class="time-number">907年 - 1125年</div>
                    </div>
                    <div class="desc"><b>南宋</b>
                        <div class="time-number">1127年 - 1279年</div>
                    </div>
                    <div class="desc"><b>金</b>
                        <div class="time-number">1115年 - 1234年</div>
                    </div>
                </div>
            </li>
            <!-- Item 16 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">元</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc">
                        <router-link to="/history/yuan">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b>元朝地图</b>
                            </a>
                        </router-link>
                        <b>元</b>
                        <div class="time-number">1127年 - 1279年</div>
                    </div>
                </div>
            </li>
            <!-- Item 17 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">明</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>明</b>
                        <router-link to="/history/ming">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b> 明朝地图</b>
                            </a>
                        </router-link>
                        <div class="time-number">11368年 - 1644年</div>
                    </div>
                </div>
            </li>
            <!-- Item 18 -->
            <li>
                <div class="direction-l">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">清</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc">
                        <router-link to="/history/qing">
                            <a target="_blank" href="" class="q-mr-md q-my-sm link"><b>清朝地图</b>
                            </a>
                        </router-link>
                        <b>清</b>
                        <div class="time-number">1616年 - 1911年</div>
                    </div>
                </div>
            </li>
            <!-- Item 19 -->
            <li>
                <div class="direction-r">
                    <div class="flag-wrapper">
                        <span class="hexa"></span>
                        <span class="flag">民国</span>
                        <span class="time-wrapper"></span>
                    </div>
                    <div class="desc"><b>民国</b>
                        <div class="time-number">1912年 - 1949年</div>
                    </div>
                </div>
            </li>
        </ul>

        <el-backtop style="background-color: #c10015;color: white;" :right="100" :bottom="100" />
    </div>
</template>

<style>
.el-col {
    border-radius: 4px;
}

.hexa {
    border: 0px;
    float: left;
    text-align: center;
    height: 35px;
    width: 60px;
    font-size: 22px;
    background: #ef9a9a;
    color: #ef9a9a;
    position: relative;
    margin-top: 15px;
}

.hexa:before {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 15px solid #f0f0f0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    top: -15px;
}

.hexa:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 15px solid #f0f0f0;
    bottom: -15px;
}

.timeline {
    position: relative;
    padding: 0;
    width: 100%;
    margin-top: 20px;
    list-style-type: none;
}

.timeline:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    background: rgb(213, 213, 213);
    background: -moz-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
    background: -webkit-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
    background: -o-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
    background: -ms-linear-gradient(top, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
    background: linear-gradient(to bottom, rgba(213, 213, 213, 0) 0%, rgb(213, 213, 213) 8%, rgb(213, 213, 213) 92%, rgba(213, 213, 213, 0) 100%);
    z-index: 5;
}

.timeline li {
    padding: 2em 0;
}

.timeline .hexa {
    width: 16px;
    height: 10px;
    position: absolute;
    background: #c10015;
    z-index: 5;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -30px;
    margin-top: 0;
}

.timeline .hexa:before {
    border-bottom: 4px solid #c10015;
    border-left-width: 8px;
    border-right-width: 8px;
    top: -4px;
}

.timeline .hexa:after {
    border-left-width: 8px;
    border-right-width: 8px;
    border-top: 4px solid #c10015;
    bottom: -4px;
}

.direction-l,
.direction-r {
    float: none;
    width: 100%;
    text-align: center;
}

.time-number {
    font-size: 10px;
    color: rgb(0, 0, 0);
}

.flag-wrapper {
    text-align: center;
    position: relative;
}

.flag {
    position: relative;
    display: inline;
    background: #ef9a9a;
    font-weight: 600;
    z-index: 15;
    padding: 6px 10px;
    text-align: left;
    border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
    content: "";
    position: absolute;
    left: 50%;
    top: -15px;
    height: 0;
    width: 0;
    margin-left: -8px;
    border: solid transparent;
    border-bottom-color: rgb(255, 255, 255);
    border-width: 8px;
    pointer-events: none;
}

.direction-l .flag {
    -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.direction-r .flag {
    -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.15);
}

.time-wrapper {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
    line-height: 1em;
    color: #fff;
}

.direction-l .time-wrapper {
    float: none;
}

.direction-r .time-wrapper {
    float: none;
}

.time {
    background: #e9caca;
    display: inline-block;
    padding: 8px;
}

.desc {
    position: relative;
    margin: 3em 0 0 0;
    padding: 1em;
    background: rgb(202, 199, 199);
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.20);
    z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;
    z-index: 15;
}

@media(min-width: 768px) {
    .timeline {
        width: 660px;
        margin: 0 auto;
        margin-top: 20px;
    }

    .timeline li:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .timeline .hexa {
        left: -28px;
        right: auto;
        top: 8px;
    }

    .timeline .direction-l .hexa {
        left: auto;
        right: -28px;
    }

    .direction-l {
        position: relative;
        width: 310px;
        float: left;
        text-align: right;
    }

    .direction-r {
        position: relative;
        width: 310px;
        float: right;
        text-align: left;
    }

    .flag-wrapper {
        display: inline-block;
    }

    .flag {
        font-size: 18px;
    }

    .direction-l .flag:after {
        left: auto;
        right: -16px;
        top: 50%;
        margin-top: -8px;
        border: solid transparent;
        border-left-color: rgb(254, 254, 254);
        border-width: 8px;
    }

    .direction-r .flag:after {
        top: 50%;
        margin-top: -8px;
        border: solid transparent;
        border-right-color: rgb(254, 254, 254);
        border-width: 8px;
        left: -8px;
    }

    .time-wrapper {
        display: inline;
        vertical-align: middle;
        margin: 0;
    }

    .direction-l .time-wrapper {
        float: left;
    }

    .direction-r .time-wrapper {
        float: right;
    }

    .time {
        padding: 5px 10px;
    }

    .direction-r .desc {
        margin: 1em 0 0 0.75em;
    }
}

@media(min-width: 992px) {
    .timeline {
        width: 800px;
        margin: 0 auto;
        margin-top: 20px;
    }

    .direction-l {
        position: relative;
        width: 380px;
        float: left;
        text-align: right;
    }

    .direction-r {
        position: relative;
        width: 380px;
        float: right;
        text-align: left;
    }
}

h1 {
    font-weight: 500;
    font-family: Arial;
    text-align: center;
}

.bg-img-center {
    background-repeat: no-repeat;
    background-size: cover
}

.bg-img-center {
    background-position: 50%
}

.bg-negative {
    background: #c10015 !important;
    background: var(--q-color-negative) !important
}

.bg-red {
    background: #f44336 !important;
}

.bg-red-3 {
    background: #ef9a9a !important
}

.bg-grey-8 {
    background: #616161 !important
}

.border-radius-round {
    border-radius: 50%
}

.block {
    display: block !important
}

.text-white {
    color: #fff !important
}

.text-center {
    text-align: center
}

.no-outline {
    outline: 0 !important
}

.row {
    display: flex;
    flex-wrap: wrap
}

.col-3 {
    height: auto;
    width: 25%
}

.col {
    flex: 10000 1 0%
}

.col-1 {
    height: auto;
    width: 8.3333%
}

.col-10 {
    height: auto;
    width: 83.3333%
}

.column {
    flex-direction: column
}

.justify-center {
    justify-content: center
}

.flex-center,
.items-center {
    align-items: center
}

.items-end {
    align-items: flex-end
}

.relative-position {
    position: relative
}

.non-selectable {
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important
}

.q-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    outline: 0;
    border: 0;
    vertical-align: middle;
    padding: 0;
    font-size: 14px;
    line-height: 1.715em;
    text-decoration: none;
    color: inherit;
    background: transparent;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    width: auto;
    height: auto
}

.q-btn--rectangle {
    border-radius: 3px
}

.q-btn--rounded {
    border-radius: 28px
}

.q-btn--actionable {
    cursor: pointer;
}

.q-btn__content {
    transition: opacity 0.3s;
    z-index: 0
}

.q-btn__wrapper {
    padding: 4px 16px;
    min-height: 2.572em;
    border-radius: inherit;
    width: 100%;
    height: 100%
}

.q-py-xl {
    padding-top: 48px
}

.q-ma-xs {
    margin: 4px 4px
}

.q-mx-sm {
    margin-left: 8px;
    margin-right: 8px
}

.q-mb-md,
.q-my-md {
    margin-bottom: 16px
}

.q-mr-md {
    margin-right: 16px
}

.q-mb-sm {
    margin-bottom: 8px
}

.q-mt-sm {
    margin-top: 8px
}

.link {
    color: #01579b;
    cursor: pointer;
    text-decoration: none;
}

.link:hover {
    color: #f44336 !important
}

.bold {
    font-weight: 700
}

.size-18 {
    font-size: 18px !important
}

.size-32 {
    font-size: 32px !important
}

.size-40 {
    font-size: 40px !important
}

.title {
    font-family: HYJinKaiJ !important
}

.text-black {
    color: #000 !important
}

.q-mt-lg {
    margin-top: 24px
}

.q-pb-none {
    padding-bottom: 0
}

.q-mb-none {
    margin-bottom: 0
}
</style>