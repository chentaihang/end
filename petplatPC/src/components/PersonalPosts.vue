<template>
  <div class="personal-posts">
    <div v-for="(post, index) in personalPosts" :key="index" class="post personal-post">
      <div class="post-header">
        <p><strong>{{ username }}</strong></p>
        <button @click="deletePost(index)" class="delete-button">删除</button>
      </div>
      <p class="post-content">{{ post.content }}</p>
      <div class="image-gallery">
        <img v-for="(image, imgIndex) in post.images" :key="imgIndex" :src="image" alt="发布的图片" class="post-image" />
      </div>
      <div class="post-actions">
        <button :class="{ liked: post.liked }" @click="toggleLike(index)" class="like-button">👍 {{ post.likes }} 点赞</button>
        <button @click="showCommentInput(index)" class="comment-button">💬 评论</button>
      </div>
      <!-- 评论输入框 -->
      <div v-if="post.showCommentBox" class="comment-input">
        <input v-model="post.newComment" placeholder="输入你的评论..." />
        <button @click="addComment(index)">提交评论</button>
      </div>
      <!-- 显示评论 -->
      <div class="comments-section" v-if="post.comments.length">
        <div v-for="(comment, cIndex) in post.comments" :key="cIndex" class="comment">
          <strong>{{ comment.username }}:</strong> {{ comment.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalPosts',
  data() {
    return {
      personalPosts: [], // 用于存储个人动态内容
      username: '', // 存储用户名
    };
  },
  methods: {
    deletePost(index) {
      // 从 personalPosts 中删除指定索引的动态
      this.personalPosts.splice(index, 1);

      // 更新 localStorage
      localStorage.setItem('personalPosts', JSON.stringify(this.personalPosts));
    },
    toggleLike(index) {
      const post = this.personalPosts[index];
      if (post.liked) {
        post.likes--;
      } else {
        post.likes++;
      }
      post.liked = !post.liked;
    },
    showCommentInput(index) {
      this.personalPosts[index].showCommentBox = true;
    },
    addComment(index) {
      const post = this.personalPosts[index];
      if (post.newComment.trim()) {
        post.comments.push({ username: this.username, text: post.newComment });
        post.newComment = '';
        post.showCommentBox = false;
      }
    }
  },
  mounted() {
    // 从 localStorage 读取存储的个人动态内容
    const storedPosts = JSON.parse(localStorage.getItem('personalPosts')) || [];
    this.personalPosts = storedPosts.map(post => ({
      ...post,
      likes: post.likes || 0, // 初始化点赞数
      liked: false, // 初始化点赞状态
      showCommentBox: false, // 控制评论输入框显示
      newComment: '', // 用于存储新评论的内容
      comments: post.comments || [] // 初始化评论列表
    }));

    // 从 localStorage 读取用户名
    this.username = localStorage.getItem('username') || '未知用户';
  },
};
</script>

<style scoped>
.personal-posts {
  padding: 20px;
}

.post {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.post-content {
  margin: 10px 0;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.post-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.post-actions {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.like-button, .comment-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s;
}

.like-button.liked {
  color: red;
}

.like-button:hover, .comment-button:hover {
  color: #0056b3;
}

.comment-input {
  margin-top: 10px;
}

.comments-section {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}

.comment {
  margin-bottom: 5px;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: darkred;
}
</style>
