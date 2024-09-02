<template>
  <div id="PostDisplay">
    <Header />
  </div>
  <div class="post-display">
    <!-- 左侧轮播图 -->
    <el-carousel class="carousel" height="300px" arrow="always">
      <el-carousel-item v-for="(image, index) in formData.images" :key="index">
        <img :src="image" class="carousel-image" />
      </el-carousel-item>
    </el-carousel>

    <!-- 右侧内容 -->
    <div class="content">
      <!-- 缩略图 -->
      <div class="thumbnails">
        <img v-for="(image, index) in formData.images" :key="index" :src="image" class="thumbnail" />
      </div>

      <!-- 标题 -->
      <div class="title">
        <h2>{{ formData.title }}</h2>
      </div>

      <!-- 时间范围和评分 -->
      <div class="details">
        <div class="row">
          <p class="rating"><strong></strong>{{ formData.rating }}分</p>
          <p class="tags"><strong></strong>{{ formData.tags }}</p>
        </div>

        <!-- 动态显示内容，根据 contentArea 选择不同展示 -->
        <div v-if="formData.contentArea === 'news'">
          <div class="row">
            <p class="time"><strong>开放时间：</strong>{{ formatDateRange(formData.openDate) }} {{ formData.startTime }} - {{ formData.endTime }}</p>
          </div>
          <div class="row">
            <p class="address"><strong>地址：</strong>{{ formData.address }}</p>
          </div>
          <div class="row">
            <p class="item"><strong>宠物游玩项目：</strong>{{ formData.serviceItems }}</p>
          </div>
        </div>

        <div v-else-if="formData.contentArea === 'blog'">
          <div class="row">
            <p class="time"><strong>开放时间：</strong>{{ formatDateRange(formData.openDate) }} {{ formData.startTime }} - {{ formData.endTime }}</p>
          </div>
          <div class="row">
            <p class="address"><strong>地址：</strong>{{ formData.address }}</p>
          </div>
          <div class="row">
            <p class="item"><strong>宠物服务项目：</strong>{{ formData.serviceItems }}</p>
          </div>
        </div>

        <div v-else-if="formData.contentArea === 'notice'">
          <div class="row">
            <p class="time"><strong>允许寄养时间：</strong>{{ formatDateRange(formData.openDate) }}</p>
          </div>
          <div class="row">
            <p class="address"><strong>地址：</strong>{{ formData.address }}</p>
          </div>
          <div class="row">
            <p class="item"><strong>养宠类型：</strong>{{ formData.serviceItems }}</p>
            <p class="pet-years"><strong>养宠年数：</strong>{{ formData.petYears }} 年</p>
          </div>
        </div>
      </div>

      <!-- 编辑内容 -->
      <div class="content-text">
        <p>{{ formData.editContent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Header from '@/components/TravelHeader.vue';

export default {
  components: {
    Header
  },

  setup() {
    const store = useStore();
    const formData = store.state.formData; // 从 Vuex Store 中获取数据

    const formatDateRange = (range) => {
      return range ? `${range[0]} 至 ${range[1]}` : '';
    };

    return {
      formData,
      formatDateRange,
    };
  },
};
</script>

<style scoped>
.post-display {
  display: flex;
  gap: 20px;
  width: 80vw; /* 宽度占屏幕的80% */
  margin: 5% auto; /* 使组件居中 */
  box-sizing: border-box;
  padding: 20px;
}

.carousel {
  width: 30%;
  height: 300px; /* 轮播图的高度 */
  overflow: hidden; /* 确保轮播图内容不会溢出 */
  position: relative; /* 或使用 absolute 来对齐到父容器 */
  left: 5%; /* 向右移动轮播图 */
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片填满轮播图区域 */
}

.content {
  width: 50%; /* 右侧内容占50% */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px; /* 确保缩略图容器的总高度与轮播图高度一致 */
  align-items: center; /* 使缩略图居中对齐 */
  position: relative;
  left: -33%;
}

.thumbnail {
  width: 100px; /* 缩略图的宽度 */
  height: 100px; /* 缩略图的高度，确保是正方形 */
  object-fit: cover; /* 确保缩略图内容填满容器 */
}

.title h2 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  position: relative;
  left: 70%;
  bottom: 1000%;
}

.details .row {
  display: flex;
  align-items: center; /* 使内容垂直居中对齐 */
  gap: 40px; /* 在评分和标签之间留出适当的间距 */
  margin-bottom: 10px;
}

.details p {
  margin: 0;
  font-weight: bold;
  position: relative;
  left: 40%;
  bottom: 300px;
}

.rating {
  color: red;
  font-size: 28px;
}

.tags {
  font-size: 18px; /* 设置标签的字体大小 */
  color: #deda19; /* 为标签添加一个颜色 */
}

.content-text p {
  font-size: 16px;
  line-height: 1.5;
  position: relative;
  left: 40%;
  bottom: 600%;
}
</style>
