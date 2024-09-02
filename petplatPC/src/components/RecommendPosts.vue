<!-- 推荐动态 -->

<template>
  <div class="recommend-posts">
    <div v-for="(post, index) in recommendedPosts" :key="index" class="post">
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendPosts',
  data() {
    return {
      recommendedPosts: [
        { content: '这是推荐动态1' },
        { content: '这是推荐动态2' },
        { content: '这是推荐动态3' },
        // 可以添加更多的模拟数据或从后台获取实际数据
      ],
    };
  },
};
</script>

<style scoped>
.recommend-posts {
  padding: 20px;
}

.post {
  width: 100%;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: left;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
