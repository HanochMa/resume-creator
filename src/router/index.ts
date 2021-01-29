import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
const Home = () => import('/@/views/home.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
