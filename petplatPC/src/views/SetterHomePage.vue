<template>
    <div id="SetterHomePage">
      <Header />
      <Galley />
      <DateRangePicker />
    </div>
  </template>
  
  <script>
  import Header from '@/components/TravelHeader.vue';
  import Galley from '@/components/SetterImageGalley.vue';
  import DateRangePicker from '@/components/SetterDateRangePicker.vue';
  
  export default {
    components: {
      Header,
      Galley,
      DateRangePicker
    }
  };
  </script>
  
  <style scoped>
  #SceneHomePage { 
    background: white;
  }
  
  
  
  </style>
  