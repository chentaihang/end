<template>
    <div class="container">
    <TravelHeader currentTab="home" @change-tab="changeTab" />
      <header class="header">
      </header>
      <!-- 轮播图区域 -->
      <section class="carousel">
        <div v-for="(item, index) in imageUrls" :key="index" class="carousel-item">
          <img :src="item" :alt="'carousel-' + index">
          <div class="carousel-caption">轮播图片{{ index + 1 }}的描述</div>
        </div>
      </section>
  
      <!-- 主内容区域 -->
      <main class="main-content">
        <!-- 推荐文章区域 -->
        <section class="articles">
          <h2>推荐文章</h2>
          <article v-for="(item, index) in combinedArticles" :key="index" class="article-item">
            <img :src="item.imageUrl" :alt="'article-' + index">
            <div class="article-content">
              <h3>{{ item.title || '无标题' }}</h3> <!-- 修改点 -->
              <router-link :to="{ name: 'gongluexiangxi', params: { id: item.id } }">阅读更多</router-link>
            </div>
          </article>
        </section>
  
        <!-- 侧边栏 -->
        <aside class="sidebar">
          <section class="video-section">
            <h3>视频专区</h3>
            <div v-for="(video, index) in videoUrls" :key="index" class="video-item">
              <video :src="video" controls></video>
              <p>视频描述{{ index + 1 }}</p>
            </div>
          </section>
  
          <section class="hot-topics">
            <h3>热门话题</h3>
            <ul>
              <li><a href="#">话题一</a></li>
              <li><a href="#">话题二</a></li>
            </ul>
          </section>
  
          <section class="latest-updates">
            <h3>最新动态</h3>
            <ul>
              <li><a href="#">动态一</a></li>
              <li><a href="#">动态二</a></li>
            </ul>
          </section>
  
          <button class="post-button" @click="goToPublish">发帖</button>
        </aside>
      </main>
  
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
        imageUrls: [
          "https://via.placeholder.com/300x200.png?text=Static+Image",
          "https://via.placeholder.com/300x200.png?text=Static+Image",
          "https://via.placeholder.com/300x200.png?text=Static+Image"
        ],
        videoUrls: [
          "/v/111111.mp4", 
          "/v/111111.mp4",
          "/v/111111.mp4"
        ],
        articles: [],
        storedPosts: []  // 动态发布的帖子数据
      };
    },
    computed: {
      combinedArticles() {
        return this.articles.concat(this.storedPosts);
      }
    },
    created() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      if (posts.length > 0) {
        this.storedPosts = posts;
      }
    },
    methods: {
      goToPublish() {
        this.$router.push('/Gongluefabu');
      },
      clearPosts() {
        localStorage.removeItem('posts');
      }
    },
    mounted() {
      // Attach the beforeunload event listener
      window.addEventListener('beforeunload', this.clearPosts);
    },
    beforeUnmount() {
      // Remove the event listener when the component is destroyed
      window.removeEventListener('beforeunload', this.clearPosts);
    }
  };
  </script>
  <style
    scoped>
  
    /* 样式代码 */
    /* 容器样式 */
  
    /* 轮播图样式 */
    .carousel {
      margin: 20px 0;
      display: flex;
      overflow: hidden;
      position: relative;
    }
  
    .carousel-item {
      min-width: 100%;
      transition: transform 0.5s ease;
    }
  
    .carousel-item img {
      width: 100%;
      height: auto;
      display: block;
    }
  
    .carousel-caption {
      position: absolute;
      bottom: 20px;
      left: 20px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px;
      border-radius: 5px;
    }
  
    /* 主内容区样式 */
    .main-content {
      display: flex;
      margin-top: 20px;
    }
  
    /* 文章列表样式 */
    .articles {
      flex: 2;
      margin-right: 20px;
    }
  
    .article-item {
      display: flex;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
  
    .article-item img {
      width: 150px;
      height: auto;
      object-fit: cover;
    }
  
    .article-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  
    .article-content h3 {
      margin: 0 0 10px;
    }
  
    .article-content p {
      flex: 1;
      margin: 0 0 10px;
    }
  
    .article-content a {
      color: #007bff;
      text-decoration: none;
    }
  
    .article-content a:hover {
      text-decoration: underline;
    }
  
    /* 侧边栏样式 */
    .sidebar {
      flex: 1;
    }
  
    .video-section,
    .hot-topics,
    .latest-updates {
      margin-bottom: 20px;
    }
  
    .video-item {
      margin-bottom: 20px;
    }
  
    .video-item video {
      width: 100%;
      height: 200px;
      display: block;
    }
  
    .video-item p {
      margin-top: 5px;
      text-align: center;
    }
  
    .hot-topics ul,
    .latest-updates ul {
      list-style: none;
      padding: 0;
    }
  
    .hot-topics li,
    .latest-updates li {
      margin-bottom: 10px;
    }
  
    .hot-topics a,
    .latest-updates a {
      color: #007bff;
      text-decoration: none;
    }
  
    .hot-topics a:hover,
    .latest-updates a:hover {
      text-decoration: underline;
    }
  
    /* 页脚样式 */
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
  
    /* 发帖按钮样式 */
    .post-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
      width: 100%;
      margin-bottom: 20px;
      border-radius: 5px;
    }
  
    .post-button:hover {
      background-color: #0056b3;
    }
  </style>
  