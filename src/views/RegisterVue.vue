<script  setup>

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
                <h1>注册</h1>
                <div class="input-box">
                    <input type="text" placeholder="用户名" v-model="username" required />
                    <UserFilled class="icon" style="width: 1.5em;height: 1.5em;margin-right: 8px;" />
                </div>
                <div class="input-box">
                    <input type="password" placeholder="密码" v-model="password" required />
                    <Lock class="icon" style="width: 1.5em;height: 1.5em;margin-right: 8px;" />
                </div>
                <div class="input-box">
                    <input type="password" placeholder="密码" v-model="password" required />
                    <Lock class="icon" style="width: 1.5em;height: 1.5em;margin-right: 8px;" />
                </div>



                <button type="submit">注册</button>


            </form>
        </div>
    </div>
</template>

<style scoped src="../css/Register.css"></style>