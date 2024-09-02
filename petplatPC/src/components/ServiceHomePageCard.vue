<template>
    <div class="card">
      <div class="input-row">
        <label for="city">城市：</label>
        <input id="city" v-model="city" placeholder="请输入城市" />
      </div>
      <div class="input-row">
        <label for="visitorCount">光顾人（宠）数：</label>
      </div>
      <div class="input-row">
        <select id="peopleNum" v-model="selectedPeopleNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <!-- 你可以在这里添加更多选项 -->
        </select>
        <label for="peopleNum"> 人：</label>
      </div>
      <div class="input-row">
        <select id="petNum" v-model="selectedPetNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <!-- 你可以在这里添加更多选项 -->
        </select>
        <label for="petNum">    宠：</label>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const city = ref('');
  const selectedPeopleNum = ref('adult');
  const selectedPetNum = ref('dog');
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    padding: 20px; /* 增加内边距以便内容有更多空间 */
    border-radius: 8px;
    position: absolute; /* 或 fixed */
    top: 22%; /* 根据需要调整位置 */
    left: 25%;
    width: 380px; /* 增加宽度 */
    height: 330px;
  }
  
  .input-row {
    margin-bottom: 16px; /* 增加底部边距 */
    font-size: 16px; /* 字体大小 */
    padding-left: 10px; /* 增加左边距 */
    padding-top: 10px; /* 增加顶部边距 */
  }
  
  input, select {
    margin-left: 8px;
    font-size: 16px; /* 字体大小 */
  }
  
  label {
    font-weight: bold; /* 字体加粗 */
  }
  
  select {
    width: 120px; /* 增加下拉选择器宽度 */
  }
  </style>
  