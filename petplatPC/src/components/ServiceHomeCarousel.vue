<template>
    <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in images" :key="index" class="carousel-item">
          <img :src="item" alt="Carousel Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // 图片资源
  const images = ref([
    require('@/assets/images/宠物洗护1.jpg'),
    require('@/assets/images/宠物洗护2.jpg'),
    require('@/assets/images/宠物洗护3.png'),
  ]);
  
  const currentIndex = ref(0);
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };
  
  onMounted(() => {
    setInterval(nextSlide, 3000); // 每3秒切换一次
  });
  </script>
  
  <style scoped>
  .carousel-container {
    position: fixed; /* 使用 fixed 定位 */
    top: 20%; /* 从屏幕顶部 20px 距离 */
    left: 70%; /* 居中水平对齐 */
    width: 20%; /* 设置容器宽度 */
    height: 40vh; /* 根据需要调整高度，适合竖长图 */
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    flex-direction: row; /* 保证水平滑动 */
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: none; /* 确保每个项目固定大小 */
    width: 100%; /* 占据整个容器宽度 */
    height: 100%; /* 占据整个容器高度 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-item img {
    width: 100%; /* 图片宽度填充容器 */
    height: 100%; /* 图片高度填充容器 */
    object-fit: cover; /* 保证图片按比例填充，不变形 */

  }
  </style>