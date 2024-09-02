<!-- 登录 -->
<template>
  <div class="login-page">
    <div class="login-box">
      <h2>欢迎使用系统</h2>
      <form @submit.prevent="login">
        <div class="input-box">
          <input type="text" placeholder="请输入账号" v-model="username" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="请输入密码" v-model="password" required />
        </div>
        <button type="submit">登录</button>
        <button type="button" @click="goToRegister">注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        localStorage.setItem('username', this.username);
        this.$router.push('/allhome'); // 或者使用 '/pet-circle' 作为目标路径
      } else {
        alert('请输入有效的用户名和密码');
      }
    },
    goToRegister() {
      this.$router.push('/register'); // 跳转到注册页面
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/images/bg5.jpeg'); /* 设置背景图片的路径 */
  background-size: cover; /* 确保背景图片覆盖整个页面 */
  background-repeat: no-repeat;
  background-position: center;
}

.login-box {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.input-box {
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 5px;
}

button[type="button"] {
  background-color: grey; /* 注册按钮颜色不同 */
}

button[type="button"]:hover {
  background-color: darkgrey; /* 悬停时的注册按钮颜色 */
}
</style>
