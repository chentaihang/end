<template>
  <div class="card" :style="{ backgroundColor: cardColor }">
    <img :src="imgSrc" :alt="imgAlt">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
props: {
  imgSrc: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  cardColor: {
    type: String,
    default: '#5f3ab1'  
    }
}
};
</script>

<style scoped>
.card {
  padding: 5px;
  text-align: center;
  width: 15%;
  height:30%;
  margin: 100px ;
}

.card img {
  width: 60%;
  height:65%;
}


.card h2 {
  color: white;
  margin-top: 10px;
  font-size: 15px;
}
</style>
  