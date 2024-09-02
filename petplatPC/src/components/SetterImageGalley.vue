<template>
  <div class="image-gallery-container">
    <div class="image-gallery">
      <!-- 第一排，宽度依次减小 -->
      <div class="row">
        <img :src="images[0].src" :alt="images[0].alt" class="img-large" />
        <img :src="images[1].src" :alt="images[1].alt" class="img-medium" />
        <img :src="images[2].src" :alt="images[2].alt" class="img-small" />
      </div>
      <!-- 第二排，顺序与第一排相反，宽度相同 -->
      <div class="row">
        <img :src="images[3].src" :alt="images[3].alt" class="img-small" />
        <img :src="images[4].src" :alt="images[4].alt" class="img-medium" />
        <img :src="images[5].src" :alt="images[5].alt" class="img-large" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  data() {
    return {
      images: [
        { src: require('@/assets/images/萌宠1.jpg'), alt: "萌宠1" },
        { src: require('@/assets/images/萌宠2.jpg'), alt: "萌宠2" },
        { src: require('@/assets/images/萌宠3.jpg'), alt: "萌宠3" },
        { src: require('@/assets/images/萌宠4.jpg'), alt: "萌宠4" },
        { src: require('@/assets/images/萌宠5.jpg'), alt: "萌宠5" },
        { src: require('@/assets/images/萌宠6.jpg'), alt: "萌宠6" }
      ]
    };
  }
}
</script>

<style scoped>
.image-gallery-container {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 70vw;  /* 占据屏幕宽度的 70% */
  height: 30vh; /* 减小高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-gallery {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;  /* 改为中心对齐 */
  width: 100%;
  margin-bottom: 10px;  /* 减小行间距 */
}

.img-large {
  width: 40%;
  height: 150px;  /* 减小图片高度 */
  margin: 0 5px;  /* 添加左右外边距 */
}

.img-medium {
  width: 30%;
  height: 150px;  /* 减小图片高度 */
  margin: 0 5px;  /* 添加左右外边距 */
}

.img-small {
  width: 20%;
  height: 150px;  /* 减小图片高度 */
  margin: 0 5px;  /* 添加左右外边距 */
}

@media (max-width: 600px) {
  .img-large {
    width: 35%;
    height: 80px;  /* 减小图片高度 */
    margin: 0 3px;  /* 在小屏幕下减少间距 */
  }
  .img-medium {
    width: 25%;
    height: 60px;  /* 减小图片高度 */
    margin: 0 3px;  /* 在小屏幕下减少间距 */
  }
  .img-small {
    width: 15%;
    height: 40px;  /* 减小图片高度 */
    margin: 0 3px;  /* 在小屏幕下减少间距 */
  }
}
</style>
