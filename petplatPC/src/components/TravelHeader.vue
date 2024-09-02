<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="宠乐星球">
      <div class="title-container">
        <h1>宠乐星球</h1>
        <h2>Pet Joy Planet</h2>
      </div>
    </div>
    <nav class="navbar">
    <a @click="navigateTo('home')" :class="{ active: currentTab === 'home' }">首页</a>
    <a @click="navigateTo('guide')" :class="{ active: currentTab === 'guide' }">攻略宝典</a>
    <a @click="navigateTo('pet-circle')" :class="{ active: currentTab === 'pet-circle' }">宠友圈</a>
    <a @click="navigateTo('travel')" :class="{ active: currentTab === 'travel' }">旅行助手</a>
    <a @click="navigateTo('about')" :class="{ active: currentTab === 'about' }">关于我们</a>
  </nav>
    <nav>
      <!-- <a href="#">注册/登录</a> -->
      <a @click="navigateTo('login')" :class="{ active: currentTab === 'login' }">切换账号</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TravelHeader',
  methods: {
    navigateTo(page) {
      if (page === 'home') this.$router.push('/allhome');
      else if (page === 'guide') this.$router.push('/gongluemain');
      else if (page === 'pet-circle') this.$router.push('/petcircle');
      else if (page === 'travel') this.$router.push('/travelhome');
      else if (page === 'about') this.$router.push('/about');
      else if (page === 'login') this.$router.push('/');
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 20px;
  background-color: #5f3ab1;
}

header .logo {
  display: flex;
  align-items: center;
}

header .logo img {
  height: 50px;
  margin-right: 10px;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px; 
}

header h1 {
  color: white;
  margin: 0;
  font-size: 30px; /* Adjust the font size as needed */
  font-weight: bold;
}

header h2 {
  color: white;
  margin: 0;
  font-size: 10px; /* Adjust the font size as needed */
  font-weight: normal;
}

header nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
nav {
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

nav a {
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
}

nav a.active {
  color: blue;
  font-weight: bold;
}

</style>
