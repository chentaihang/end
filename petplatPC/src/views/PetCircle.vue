<!-- 宠友圈 -->
<template>
  <div class="pet-circle-page">
    <TravelHeader currentTab="home" @change-tab="changeTab" />
    <!-- 子导航栏 -->
    <div class="sub-nav">
      <button @click="setActiveTab('recommend')" :class="{ active: activeTab === 'recommend' }">推荐动态</button>
      <button @click="setActiveTab('friends')" :class="{ active: activeTab === 'friends' }">好友动态</button>
      <button @click="setActiveTab('personal')" :class="{ active: activeTab === 'personal' }">个人动态</button>
    </div>

    <!-- 动态内容 -->
    <div class="dynamic-content">
      <div v-if="activeTab === 'recommend'">
        <RecommendPosts /> <!-- 使用推荐动态组件 -->
      </div>
      <div v-else-if="activeTab === 'friends'">
        <FriendPosts /> <!-- 使用好友动态组件 -->
      </div>
      <div v-else-if="activeTab === 'personal'">
        <PersonalPosts /> <!-- 使用个人动态组件 -->
      </div>
    </div>

    <!-- 悬浮按钮 -->
    <button class="floating-button" @click="goToPublishPage">
      <img src="" alt="发布" />
    </button>
  </div>
</template>

<script>
import TravelHeader from '../components/TravelHeader.vue';
import RecommendPosts from '../components/RecommendPosts.vue'; // 引入推荐动态组件
import FriendPosts from '../components//FriendPosts.vue'; // 引入好友动态组件
import PersonalPosts from '../components//PersonalPosts.vue'; // 引入个人动态组件

export default {
  components: {
    TravelHeader,
    RecommendPosts, // 注册推荐动态组件
    FriendPosts, // 注册好友动态组件
    PersonalPosts, // 注册个人动态组件
  },
  data() {
    return {
      activeTab: 'recommend', // 默认选中推荐动态
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    goToPublishPage() {
      this.$router.push('/publishpage');
    },
  },
};
</script>

<style scoped>
.sub-nav {
  display: flex;
  justify-content: space-around;
  background-color: #eaeaea;
  padding: 10px;
}

.sub-nav button {
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 16px;
}

.sub-nav button.active {
  color: blue;
  font-weight: bold;
}

.dynamic-content {
  padding: 20px;
  display: flex;
  flex-direction: column; /* 纵向排列内容 */
  gap: 10px;
  justify-content: center;
}

.post {
  width: 100%; /* 使内容宽度与网页宽度一致 */
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  text-align: left; /* 内容左对齐 */
}

.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.floating-button img {
  width: 100%;
  height: 100%;
}
</style>
