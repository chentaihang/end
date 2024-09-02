<template>
    <div id="TravelHomepage">
      <Header />
      <Carousel />
      <section class="content">
        <ContentCard
          :imgSrc="require('@/assets/images/宠物友好景点.jpg')"
          imgAlt="宠物友好景点"
          title="宠物友好景点"
          cardColor="#3498db"
          @click="goToSceneHomePage"
          class="clickable-card"
        />
        <ContentCard
          :imgSrc="require('@/assets/images/宠物养护好店.jpg')"
          imgAlt="宠物养护好店"
          title="宠物养护好店"
          cardColor="#2ecc71"
          @click="goToServiceHomePage"
          class="clickable-card"
        />
        <ContentCard
          :imgSrc="require('@/assets/images/宠物寄养.jpg')"
          imgAlt="宠物寄养平台"
          title="宠物寄养平台"
          cardColor="#5f3ab1"
          @click="goToSetterHomePage"
          class="clickable-card"
        />
      </section>
    </div>
  </template>
  
  <script>
  import Header from '@/components/TravelHeader.vue';
  import Carousel from '@/components/TravelCarousel.vue';
  import ContentCard from '@/components/TravelContentCard.vue';
  
  export default {
    components: {
      Header,
      Carousel,
      ContentCard
    },
    methods: {
      goToSceneHomePage() {
        this.$router.push('/SceneHP'); 
      },
      goToServiceHomePage() {
        this.$router.push('/ServiceHP'); 
      },
      goToSetterHomePage() {
        this.$router.push('/SetterHP'); 
      }
    }
  };
  </script>
  
  <style scoped>
  #TravelHomepage {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #9f5ed5, #f1c850);
  }

  
  .content {
    display: flex;
    justify-content: space-around;
    padding: 40px;
    background: linear-gradient(to bottom, #f1c850, #e9a8f5);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 35%; 
  }
  
  .clickable-card {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .clickable-card:hover {
    transform: scale(1.05); 
  }
  
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      align-items: center;
    }
  
    .content .card {
      width: 80%;
      margin-bottom: 20px;
    }
  }
  </style>