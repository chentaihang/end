<template>
    <div id="ServiceHomePage">
      <Header />
      <SearchBar />
      <Carousel />
      <Card />
      <Date />
    </div>
  </template>
  
  <script>
  import Header from '@/components/TravelHeader.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import Carousel from '@/components/ServiceHomeCarousel.vue';
  import Card from '@/components/ServiceHomePageCard.vue';
  import Date from '@/components/ServiceHomePageCalendar.vue';
  
  export default {
    components: {
      Header,
      SearchBar,
      Carousel,
      Card,
      Date
    }
  };
  </script>

<style scoped>
#SceneHomePage { 
  background: white;
}



</style>