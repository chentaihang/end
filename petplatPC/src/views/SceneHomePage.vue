<template>
  <div id="SceneHomePage">
    <Header />
    <SearchBar />
    <Sidebar />
    <SceneImageGrid />
  </div>
</template>

<script>
import Header from '@/components/TravelHeader.vue';
import Sidebar from '@/components/SceneSideBar.vue';
import SceneImageGrid from '@/components/SceneImageGrid.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  components: {
    Header,
    SearchBar,
    Sidebar,
    SceneImageGrid
  }
};
</script>

<style scoped>
#SceneHomePage { 
  background: white;
}

#SearchBar {
  position: absolute;
  left: 30%;
  top: 20%;
}

#Sidebar {
  position: absolute;
  left: 15%;
  top: 20%;
}

</style>
