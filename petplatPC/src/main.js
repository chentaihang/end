import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import store from './store';
import ElementPlus from 'element-plus'; // 确保导入 Element Plus
import 'element-plus/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app');
