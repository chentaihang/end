<!-- Home.vue -->
<template>
  <div>
    <!-- 使用新的 TravelHeader 组件 -->
    <TravelHeader currentTab="home" @change-tab="changeTab" />

    <!-- 其他页面内容 -->
    <div class="content">
      <h2>欢迎选择宠乐星球</h2>
      <!-- 这里可以添加更多内容 -->
    </div>
  </div>
</template>

<script>
import TravelHeader from '../components/TravelHeader.vue'; // 引入新的导航栏组件

export default {
  components: {
    TravelHeader,
  },
  methods: {
    changeTab(tab) {
      // 更新 currentTab，这里你可以设置 Vue Router 的逻辑来切换页面
      console.log('Navigating to:', tab);
    }
  }
};
</script>

<style scoped>
.content {
  padding: 20px;
  text-align: center;
  background-image: url('../assets/images/background.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  color: white;
  opacity: 0.8;
  filter: brightness(0.8);
}
</style>
