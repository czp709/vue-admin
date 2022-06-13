import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/theme-chalk/index.css';
import elementIcon from "@/utils/svgicon";
import "./mock/mock.js";
createApp(App).use(store).use(router).use(elementIcon).mount('#app');
