<template>
    <div id="TravelPostPage">
      <Header />
      <PostUI />
    </div>
  </template>
  
  <script>
  import Header from '@/components/TravelHeader.vue';
  import PostUI from '@/components/TravelPostUI.vue';
  
  export default {
    components: {
      Header,
      PostUI
    }
  };
  </script>
  
  <style scoped>
  #SceneHomePage { 
    background: white;
  }
  
  
  
  </style>