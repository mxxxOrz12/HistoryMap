<template>
    <div class="app-container">
        <!-- Header -->
        <header class="header">
            <router-link to="/" class="logo">中国历史电子地图平台</router-link>

            <nav class="navbar">
                <router-link to="/">主页</router-link>
                <router-link to="/map">地图展示</router-link>
                <router-link to="/history">历史讲解</router-link>
                <router-link to="/knowledge">历史AI</router-link>
                <router-link to="/profile" class="active">我的</router-link>
            </nav>
            <div>
                <router-link to="/login" class="btn-head">登录</router-link>
                <router-link to="/register" class="btn-head">注册</router-link>
            </div>
        </header>

        <!-- Main Content -->
        <div class="main-content">
            <!-- Profile Card -->
            <div class="profile-card">
                <div class="profile-info">
                    <div class="profile-avatar"></div>
                    <div class="info-text">
                        <div class="info-name">马骁</div>
                    </div>
                </div>
            </div>

            <!-- Post Form -->
            <div class="post-form">
                <el-form :rules="rules" label-width="100px" size="large">
                    <el-form-item label="登录名称">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="用户昵称" prop="nickname">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="用户邮箱" prop="email">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="userUpdate">提交修改</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <div class="personal-center">
                    <h4>个人中心</h4>
                    <ul>
                        <li><a href="#" class="sidebar-link">账号设置</a></li>
                        <li><a href="#" class="sidebar-link">提问和回答</a></li>
                    </ul>
                </div>
                <div class="other-features">
                    <h4>其他功能</h4>
                    <ul>
                        <li><a href="#" class="sidebar-link">联系我们</a></li>
                        <li><a href="#" class="sidebar-link">服务协议</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style scoped>
.app-container {
    height: 100vh;
    background-color: #f7fafc;
    background-image: url(../assets/pic/背景1.jpg);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 8%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
}

.navbar a {
    font-size: 22px;
    font-weight: 600;
    margin-left: 30px;
    color: #fff;
    transition: .3s;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    text-decoration: none;
}

.navbar a:hover,
.navbar a.active {
    color: #42c1e8;
}


.logo {
    color: #fff;
    font-size: 28px;
    font-weight: 1000;
    animation: logoAnimation 2.5s infinite alternate;
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-decoration: none;

}

@keyframes logoAnimation {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(1.2);
    }
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-title {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.header-nav {
    display: flex;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin-left: 16px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #dbeafe;
}

.main-content {
    position: absolute;
    top: 200px;
    left: 240px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 32px auto;
    padding: 0 16px;
}

.profile-card,
.post-form,
.sidebar {
    background-color: white;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.profile-card,
.sidebar {
    width: 23%;
}

.post-form {
    width: 50%;
    padding: 40px 40px 0 20px;
}

.profile-info {
    display: flex;
    margin-bottom: 16px;
}

.profile-avatar {
    flex-shrink: 0;
    background-color: #edf2f7;
    height: 64px;
    width: 64px;
    border-radius: 9999px;
    background-image: url(../assets/pic/han.jpg);
}

.info-text {
    margin-left: 16px;
}

.info-name {
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
}

.info-details {
    font-size: 14px;
    color: #4a5568;
}

.follow-btn {
    display: block;
    width: 100%;
    background-color: #ef4444;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.follow-btn:hover {
    background-color: #dc2626;
}

.post-textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    margin-bottom: 16px;
    resize: vertical;
}

.submit-btn {
    background-color: #3b82f6;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #2563eb;
}

.sidebar h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
}

ul {
    list-style-type: none;
    padding: 0;
}

.sidebar-link {
    display: block;
    color: #1f2937;
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.3s ease;
}

.sidebar-link:hover {
    color: #3b82f6;
}

.personal-center,
.other-features {
    margin-bottom: 16px;
}
</style>