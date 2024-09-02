<template>
	<div class="container">
		<TravelHeader currentTab="home" @change-tab="changeTab" />
	  <main class="main-content">
		<!-- 文章详情 -->
		<article class="detailed-article" v-if="article">
		  <h1>{{ article.title || '无标题' }}</h1>
		  <img :src="article.imageUrl || 'https://via.placeholder.com/800x400.png?text=No+Image'" :alt="article.title">
		  <p>{{ article.content }}</p>
		</article>
		<p v-else>文章未找到</p>
  
		<!-- 侧边栏内容 -->
		<aside class="related-content">
		  <section class="related-articles">
			<h3>相关文章</h3>
			<ul>
			  <li v-for="(related, index) in relatedArticles" :key="index">
				<a href="#">{{ related.title }}</a>
			  </li>
			</ul>
		  </section>
  
		  <section class="comments-section">
			<h3>评论</h3>
			<div v-for="(comment, index) in comments" :key="index" class="comment-item">
			  <p><strong>{{ comment.username }}</strong>: {{ comment.text }}</p>
			</div>
			<form @submit.prevent="submitComment">
			  <textarea v-model="newComment" placeholder="添加评论..."></textarea>
			  <button type="submit">提交评论</button>
			</form>
		  </section>
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
	  TravelHeader
	},
	name: 'DetailedArticle',
	data() {
	  return {
		article: null,  // 存储当前文章内容
		relatedArticles: [
		  { title: "相关文章1" },
		  { title: "相关文章2" },
		  { title: "相关文章3" }
		],
		comments: [
		  { username: "用户1", text: "这是一条评论内容" },
		  { username: "用户2", text: "这是一条评论内容" }
		],
		newComment: ''  // 存储新的评论内容
	  };
	},
	created() {
	  // 获取路由传递的文章 ID
	  const articleId = parseInt(this.$route.params.id, 10);
  
	  // 从 localStorage 中获取帖子数据
	  const posts = JSON.parse(localStorage.getItem('posts'));
  
	  // 根据 ID 查找对应的文章
	  this.article = posts.find(post => post.id === articleId);
  
	  // 如果文章未找到，显示默认提示
	  if (!this.article) {
		this.article = {
		  title: '文章未找到',
		  content: '抱歉，无法找到该文章的详细内容。',
		  imageUrl: ''
		};
	  }
	},
	methods: {
	  submitComment() {
		if (this.newComment) {
		  this.comments.push({
			username: "新用户",
			text: this.newComment
		  });
		  this.newComment = '';
		}
	  }
	}
  };
  </script>
  
  <style scoped>
  /* 页面样式与其他页面保持一致，额外调整详细页面的样式 */
  .main-content {
	display: flex;
	margin-top: 20px;
  }
  
  .detailed-article {
	flex: 2;
	margin-right: 20px;
  }
  
  .detailed-article h1 {
	margin-bottom: 20px;
	font-size: 24px;
  }
  
  .detailed-article img {
	width: 100%;
	height: auto;
	margin-bottom: 20px;
  }
  
  .detailed-article p {
	line-height: 1.6;
  }
  
  .related-content {
	flex: 1;
  }
  
  .related-articles, .comments-section {
	margin-bottom: 20px;
  }
  
  .comments-section textarea {
	width: 100%;
	height: 100px;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ddd;
  }
  
  .comments-section button {
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
  }
  
  .comments-section button:hover {
	background-color: #0056b3;
  }
  
  .footer {
	background-color: #333;
	color: white;
	padding: 20px 0;
	margin-top: 20px;
	text-align: center;
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
  