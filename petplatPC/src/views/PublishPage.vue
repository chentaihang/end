<!-- 发布个人动态 -->
<template>
  <div class="publish-page">
    <TravelHeader currentTab="home" @change-tab="changeTab" />
    <!-- 发布动态的内容 -->
    <div class="publish-content">
      <h2>发表动态</h2>
      <textarea v-model="postContent" placeholder="分享你与宠物的点点滴滴......"></textarea>

      <!-- 文件选择器 -->
      <input type="file" id="file-input" @change="handleFileChange" accept="image/*" multiple hidden />
      <label for="file-input" class="file-button">选择图片</label>

      <!-- 图片预览 -->
      <div class="image-preview">
        <div v-for="(image, index) in imageData" :key="index" class="image-container">
          <img :src="image" alt="预览图片" />
        </div>
      </div>

      <div class="button-group">
        <button class="publish-button" @click="publishPost">发布</button>
        <button class="back-button" @click="goBack">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
import TravelHeader from '../components/TravelHeader.vue';

export default {
  name: 'PublishPage',
  components: {
    TravelHeader,
  },
  data() {
    return {
      postContent: '', // 存储用户输入的内容
      imageData: [], // 存储选中的图片数据
    };
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      const fileArray = Array.from(files);

      if (fileArray.length + this.imageData.length > 9) {
        alert('最多只能选择九张图片');
        return;
      }

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData.push(e.target.result); // 将读取的文件数据存储在 imageData 数组中
        };
        reader.readAsDataURL(file); // 读取文件为 Data URL
      });
    },
    publishPost() {
      if (this.postContent.trim() || this.imageData.length) {
        // 从 localStorage 读取已有的个人动态
        let personalPosts = JSON.parse(localStorage.getItem('personalPosts')) || [];
        // 将新的内容和图片添加到个人动态列表
        personalPosts.push({ content: this.postContent, images: this.imageData });
        // 保存更新后的个人动态列表到 localStorage
        localStorage.setItem('personalPosts', JSON.stringify(personalPosts));
        // 清空输入框和图片数据
        this.postContent = '';
        this.imageData = [];
        // 跳转到宠友圈页面
        this.$router.push('/petcircle');
      } else {
        alert('请输入内容或选择图片后再发布');
      }
    },
    goBack() {
      this.$router.go(-1); // 返回到上一页面
    },
  },
};
</script>

<style scoped>
.publish-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 覆盖整个视口高度 */
  padding: 0;
  margin: 0;
  background-color: #f5f5f5;
}

.publish-content {
  flex: 1; /* 让内容区域占据剩余空间 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 垂直居中内容 */
  width: 100%;
  max-width: 600px;
  margin: 0 auto; /* 水平居中 */
  padding: 20px;
}

textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

.file-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.file-button:hover {
  background-color: #0056b3;
}

.image-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
}

.image-container {
  width: 30%;
}

.image-preview img {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.button-group {
  display: flex;
  gap: 10px; /* 按钮之间的间距 */
  margin-top: 10px;
}

.publish-button, .back-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-button {
  background-color: #6c757d; /* 返回按钮的颜色 */
}

.publish-button:hover {
  background-color: #0056b3;
}

.back-button:hover {
  background-color: #5a6268;
}
</style>
