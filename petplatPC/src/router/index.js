import { createRouter, createWebHistory } from 'vue-router';
import TravelHomepage from '@/views/TravelHomepage.vue'; 
import SceneHomePage from '@/views/SceneHomePage.vue';
import ServiceHomePage from '@/views/ServiceHomePage.vue';
import SetterHomePage from '@/views/SetterHomePage.vue';
import TravelPostPage from '@/views/TravelPostPage.vue';
import PostDisplay from '@/components/PostDisplay.vue';
import AllHome from '@/views/AllHome.vue';
import PetCircle from '@/views/PetCircle.vue';
import PublishPage from '@/views/PublishPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import Gongluemain from '@/views/Gongluemain.vue';
import Gongluefabu from '@/views/Gongluefabu.vue';
import Gongluexiangxi from '@/views/Gongluexiangxi.vue';

const routes = [
  {
    path: '/allhome',
    name: 'AllHome',
    component: AllHome // 主页路由
  },
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage // 主页路由
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage // 主页路由
  },
  {
    path: '/publishpage',
    name: 'PublishPage',
    component:PublishPage// 主页路由
  },
  {
    path: '/petcircle',
    name: 'PetCircle',
    component:PetCircle // 主页路由
  },
  {
    path: '/travelhome',
    name: 'TravelHome',
    component: TravelHomepage // 主页路由
  },
  {
    path: '/SceneHP',
    name: 'SceneHomePage',
    component: SceneHomePage
  },
  {
    path: '/ServiceHP',
    name: 'ServiceHomePage',
    component: ServiceHomePage
  },
  {
    path: '/SetterHP',
    name: 'SetterHomePage',
    component: SetterHomePage
  },
  {
    path: '/TravelPost',
    name: 'TravelPostPage',
    component: TravelPostPage
  },
  {
    path: '/post-display',
    name: 'PostDisplay',
    component: PostDisplay,
    props: route => ({ formData: route.params.formData }), // 接收传递的表单数据
  },
  {
    path: '/gongluemain',
    name: 'gongluemain',
    component: Gongluemain
  },
  {
    path: '/gongluefabu',
    name: 'gongluefabu',
    component: Gongluefabu
  },
  {
    path: '/gongluexiangxi',
    name: 'gongluexiangxi',
    component: Gongluexiangxi
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
