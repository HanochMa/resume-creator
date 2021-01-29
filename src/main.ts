import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
if (typeof window !== undefined) {
  window.$axios = axios;
}
createApp(App as any)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount('#app');
