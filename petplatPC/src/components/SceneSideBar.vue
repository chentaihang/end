<template>
    <div id="Sidebar">
      <div class="sidebar-header">
      </div>
      <nav>
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        // 定义导航菜单项
        menuItems: [
          { name: '国内(含港澳台)', link: '/' },
          { name: '欧洲', link: '/TravelPost' },
          { name: '亚洲', link: '/' },
          { name: '南美洲', link: '/' }
        ]
      };
    }
  };
  </script>

  <style scoped>
  /* 设置侧栏的基本样式 */
  #Sidebar {
    width: 200px;
    height: 25%;
    background-color: white; /* 修改背景颜色为白色 */
    color: black; /* 修改文字颜色为黑色 */
    padding: 10px;
  }

  /* 设置导航链接的样式 */
  #Sidebar nav ul {
    list-style-type: none;
    padding: 0;
  }

  #Sidebar nav ul li a {
    color: black; /* 修改链接文字颜色为黑色 */
    text-decoration: none;
    display: block;
    padding: 15px;
  }

  #Sidebar nav ul li a:hover {
    background-color: #f0f0f0; /* 修改悬停背景颜色为浅灰色 */
    color: skyblue; /* 保持文字颜色为黑色 */
  }
  </style>