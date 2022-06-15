import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-plus/theme-chalk/index.css';
import elementIcon from '@/utils/svgicon';
import './mock/mock.js';
// 防止修改sessionStorage
window.addEventListener('storage', function (e) {
  sessionStorage.setItem(e.key, e.oldValue);
});
// vue3自定义指令节流
const app = createApp(App);
app.directive('preventReClick', {
  beforeMount(el) {
    el.addEventListener('click', () => {
      if (el.style.pointerEvents !== 'none') {
        el.style.pointerEvents = 'none';
        setTimeout(() => {
          el.style.pointerEvents = '';
        }, 2000);
      }
    });
  }
});
app.use(store).use(router).use(elementIcon).mount('#app');
