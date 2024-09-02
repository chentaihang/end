<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="query"
        @input="onInput"
        placeholder="请输入搜索内容"
        aria-label="Search"
      />
      <button @click="performSearch">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['search']);
  const query = ref('');
  
  const performSearch = () => {
    // 触发 search 事件，将查询值传递给父组件
    emit('search', query.value);
  };
  
  const onInput = () => {
    // 可以在这里处理输入事件
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    width: 30%;
    position: fixed;
    top: 150px; /* 距离页面顶部 10px */
    left:30%
  }
  
  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px;
    margin-left: 8px;
    border: 2px solid #ccc;
    background-color: white;
    color: grey;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button i {
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
  
  