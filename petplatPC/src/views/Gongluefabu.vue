<template>
    <div class="flex-col page"> <!-- 顶部导航栏 -->
        <TravelHeader currentTab="home" @change-tab="changeTab" />
      <!-- 发帖表单 -->
      <div class="flex-col post-form-container self-center mt-18-5">
        <h1 class="form-title">发布新帖</h1>
  
        <!-- 标题输入框 -->
        <div class="form-group">
          <label for="post-title" class="form-label">帖子标题</label>
          <input type="text" id="post-title" class="form-input" placeholder="请输入帖子标题" v-model="postTitle">
        </div>
  
        <!-- 内容编辑框 -->
        <div class="form-group">
          <label for="post-content" class="form-label">帖子内容</label>
          <textarea id="post-content" class="form-textarea" placeholder="在这里输入帖子内容" v-model="postContent"></textarea>
        </div>
  
        <!-- 选择类别 -->
        <div class="form-group">
          <label for="post-category" class="form-label">选择分类</label>
          <select id="post-category" class="form-select" v-model="postCategory">
            <option value="宠物资讯">宠物资讯</option>
            <option value="宠物技巧">宠物技巧</option>
            <option value="旅行助手">旅行助手</option>
          </select>
        </div>
  
        <!-- 上传图片 -->
        <div class="form-group">
          <label class="form-label">上传图片</label>
          <input type="file" class="form-input-file" @change="handleImageUpload">
        </div>
  
        <!-- 提交按钮 -->
        <button class="submit-button" @click="submitPost">提交</button>
      </div>
  
      <!-- 底部导航 -->
      <footer class="footer">
        <div class="footer-links">
          <div class="footer-column">
            <h4>栏目导航</h4>
            <ul>
              <li><a href="#">宠物资讯</a></li>
              <li><a href="#">快讯</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </template>
  <script>
  import TravelHeader from '@/components/TravelHeader.vue';
  export default {
    components: {
      TravelHeader,
    },
    data() {
      return {
        postTitle: '', postContent: '', postCategory: '宠物资讯',
  
      };
    }, methods: {
      submitPost() {
        const newPost = { id: Date.now(), title: this.postTitle, content: this.postContent, category: this.postCategory, date: new Date().toLocaleString(), imageUrl: this.postImage ? URL.createObjectURL(this.postImage) : '', }; let posts = JSON.parse(localStorage.getItem('posts')) || []; posts.push(newPost); localStorage.setItem('posts', JSON.stringify(posts)); alert('帖子已提交！'); this.postTitle = ''; this.postContent = ''; this.postCategory = '宠物资讯'; this.postImage = null; this.$router.push('/gongluemain');
      }, handleImageUpload(event) { this.postImage = event.target.files[0]; },
    },
  } </script>
  <style scoped lang="css">

  .post-form-container {
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    padding: 20px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .form-textarea {
    height: 150px;
    resize: none;
  }
  
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #0084ff;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #005bb5;
  }
  
  .footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    margin-top: 20px;
    text-align: center;
  }
  
  .footer-links {
    display: flex;
    justify-content: space-around;
  }
  
  .footer-column h4 {
    margin-bottom: 10px;
  }
  
  .footer-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-column li {
    margin-bottom: 5px;
  }
  
  .footer-column a {
    color: #ccc;
    text-decoration: none;
  }
  
  .footer-column a:hover {
    text-decoration: underline;
  }
  </style>
  