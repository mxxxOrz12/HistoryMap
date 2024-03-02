<script  setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let username = ref('');
let password = ref('');
let remember = ref(false);
const router = useRouter();

const Login = () => {
    if (username.value === 'maxiao' && password.value === '123456') {
        router.push('/map');
    } else {
        alert('用户名或密码错误');
    }
}

</script>
<template>
    <div class="main">
        <div class="back">
            <router-link to="/">
                <Back class="back" />
            </router-link>

        </div>
        <div class="wrapper">
            <form @submit.prevent="login">
                <h1>登录</h1>
                <div class="input-box">
                    <input type="text" placeholder="用户名" v-model="username" required />
                    <UserFilled class="icon" style="width: 1.5em;height: 1.5em;margin-right: 8px;" />
                </div>
                <div class="input-box">
                    <input type="password" placeholder="密码" v-model="password" required />
                    <Lock class="icon" style="width: 1.5em;height: 1.5em;margin-right: 8px;" />
                </div>

                <div class="remember-forget">
                    <label><input type="checkbox" v-model="remember">记住我</label>
                    <router-link to="#">忘记密码？</router-link>
                </div>

                <button type="submit" @click="Login">登录</button>

                <div class="register-link">
                    <p>没有账号？<router-link to="/register">注册</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped src="../css/Login.css"></style>