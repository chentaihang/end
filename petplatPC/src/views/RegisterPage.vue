<!-- 注册 -->
<template>
  <div class="register-page">
    <div class="register-box">
      <h2>用户注册</h2>
      <form @submit.prevent="register">
        <div class="input-box">
          <input type="text" placeholder="请输入用户名" v-model="username" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="请输入密码" v-model="password" required />
        </div>
        <button type="submit">注册</button>
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
    register() {
      // 在这里添加注册逻辑
      console.log('注册信息:', this.username, this.password);
      // 示例: 注册成功后跳转回登录页面
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('../assets/images/bg5.jpeg'); /* 使用相同的背景图 */
  background-size: cover;
}
.register-box {
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
}
</style>
