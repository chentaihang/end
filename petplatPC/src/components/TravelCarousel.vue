<template>
  <section class="carousel">
    <transition-group name="slide" tag="div" class="carousel-wrapper">
      <div
        class="slide"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.src" :alt="image.alt" />
        <div v-if="image.caption" class="caption">{{ image.caption }}</div>
      </div>
    </transition-group>
    <!-- 固定文字容器 -->
    <div class="fixed-caption">为宠物出行创造一切可能</div>
    <!-- 图片滑动状态指示器 -->
    <div class="indicator-container">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("@/assets/images/宠物旅行1.jpg"), alt: "宠物图片1" },
        { src: require("@/assets/images/宠物旅行2.jpg"), alt: "宠物图片2" },
        { src: require("@/assets/images/宠物旅行3.jpg"), alt: "宠物图片3" }
      ],
      currentIndex: 0
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.images.push(this.images.shift()); // 将第一个图片移到最后
      }, 3000); // 每3秒切换一次
    }
  }
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 确保图片紧贴上沿 */
  background-color: #9f5ed5;
  padding: 0; /* 去掉上下内边距 */
  overflow: hidden; /* 隐藏超出部分 */
  position: relative;
  width: 100%; /* 设置固定宽度 */
  height: 445px; /* 设置固定高度 */
}

.carousel-wrapper {
  display: flex;
  justify-content: center; /* 图片居中对齐 */
  align-items: flex-start; /* 图片紧贴上沿 */
  width: 100%;
  height: 100%; /* 占满整个高度 */
}

.slide {
  width: 33%; /* 每个滑动项的宽度 */
  flex-shrink: 0;
  margin: 0 10px; /* 图片之间的间隔 */
  position: relative;
  height: 100%; /* 高度占满父容器 */
}

.slide img {
  width: 100%; /* 图片填满容器宽度 */
  height: 80%; /* 图片填满容器高度 */
  object-fit: cover; /* 裁剪图片以适应容器 */
}

.carousel .caption {
  position: absolute;
  color: white;
  font-size: 20px; /* 调整字体大小 */
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fixed-caption {
  position: absolute;
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使文字精确居中 */
  color: white;
  font-size: 24px; /* 调整字体大小 */
  font-weight: bold;
}

.indicator-container {
  position: absolute;
  bottom: 20px; /* 调整指示器位置 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicator {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.indicator.active {
  opacity: 1;
}
</style>






  