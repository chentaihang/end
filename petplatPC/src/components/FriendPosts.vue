<template>
  <div class="friend-posts">
    <!-- 模拟动态内容展示 -->
    <div v-for="(post, index) in friendPosts" :key="index" class="post">
      <div class="post-header">
        <img :src="post.userAvatar" alt="用户头像" class="user-avatar" />
        <div class="user-info">
          <p class="user-name">{{ post.userName }}</p>
          <p class="post-time">{{ post.time }}</p>
        </div>
      </div>
      <p class="post-content">{{ post.content }}</p>
      <img v-if="post.image" :src="post.image" alt="发布的图片" class="post-image" />
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
  name: 'FriendPosts',
  data() {
    return {
      friendPosts: [
        {
          userName: '李敏',
          time: '2小时前',
          content: '今天和我的小狗一起去了公园，感觉很棒！ 🌳 🐕 😊',
          image: 'https://example.com/dog-park.jpg', // 替换为实际的图片路径或URL
          userAvatar: 'https://example.com/user1-avatar.jpg', // 替换为实际的用户头像路径或URL
          likes: 0,
          liked: false,
          showCommentBox: false,
          newComment: '',
          comments: [],
        },
        {
          userName: '赵强',
          time: '4小时前',
          content: '今天给猫咪拍了一些可爱的照片！ 📸 🐈',
          image: 'https://example.com/cat-photo.jpg', // 替换为实际的图片路径或URL
          userAvatar: 'https://example.com/user2-avatar.jpg', // 替换为实际的用户头像路径或URL
          likes: 0,
          liked: false,
          showCommentBox: false,
          newComment: '',
          comments: [],
        },
        // 可以继续添加更多的模拟动态
      ],
      username: '', // 存储当前登录的用户名
    };
  },
  methods: {
    toggleLike(index) {
      const post = this.friendPosts[index];
      if (post.liked) {
        post.likes--;
      } else {
        post.likes++;
      }
      post.liked = !post.liked;
    },
    showCommentInput(index) {
      this.friendPosts[index].showCommentBox = true;
    },
    addComment(index) {
      const post = this.friendPosts[index];
      if (post.newComment.trim()) {
        post.comments.push({ username: this.username, text: post.newComment });
        post.newComment = '';
        post.showCommentBox = false;
      }
    }
  },
  mounted() {
    // 从 localStorage 读取用户名
    this.username = localStorage.getItem('username') || '未知用户';
  },
};
</script>

<style scoped>
.friend-posts {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.post {
  padding: 15px;
  margin-bottom: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left; /* 确保所有内容左对齐 */
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  margin: 0;
}

.post-time {
  font-size: 12px;
  color: #888;
  margin: 0;
}

.post-content {
  margin: 10px 0;
  text-align: left; /* 确保文本内容左对齐 */
}

.post-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: left; /* 确保图片左对齐 */
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
</style>
