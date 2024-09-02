<template>
    <div class="image-grid">
      <!-- 左侧竖长图 -->
      <div class="vertical-image" @click="goToPage('')">
        <img :src="require('@/assets/images/景点1.jpg')" alt="Vertical Image" />
      </div>
  
      <!-- 右侧四张图 -->
      <div class="horizontal-images">
        <div class="image-row">
          <div class="image-item" @click="goToPage('')">
            <img :src="require('@/assets/images/宠物旅行1.jpg')" alt="Image 1" />
          </div>
          <div class="image-item" @click="goToPage('')">
            <img :src="require('@/assets/images/宠物旅行2.jpg')" alt="Image 2" />
          </div>
        </div>
        <div class="image-row">
          <div class="image-item" @click="goToPage('')">
            <img :src="require('@/assets/images/宠物旅行3.jpg')" alt="Image 3" />
          </div>
          <div class="image-item" @click="goToPage('')">
            <img :src="require('@/assets/images/宠物寄养.jpg')" alt="Image 4" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToPage(page) {
        this.$router.push(`/${page}`);
      }
    }
  };
  </script>
  
  <style scoped>
    .image-grid {
    position: absolute;
    top: 24%;
    left: 30%;
    display: flex;
    align-items: stretch;
    gap: 20px;
    width: 50%; /* 使组件宽度为屏幕的50% */
    margin: 0 auto; /* 居中组件 */
    max-height: 500px; /* 限制组件最大高度 */
    height: 100%; /* 使组件占据全部可用高度 */
    }

    .vertical-image {
    flex: 1;
    cursor: pointer;
    display: flex;
    }

    .vertical-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    .horizontal-images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 2;
    height: 100%; /* 确保右侧部分与左侧等高 */
    }

    .image-row {
    display: flex;
    gap: 20px;
    flex: 1; /* 确保每行均分高度 */
    }

    .image-item {
    flex: 1;
    cursor: pointer;
    display: flex;
    }

    .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
  </style>
  