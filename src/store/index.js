import { createStore } from 'vuex';
import user from "./module/user";
import control_lable from "./module/control_lable";
export default createStore({
  state: {
    // 侧边栏背景色
    aside_color: '#3d4657',
    // 侧边栏字体颜色
    aside_text_color: '#ffffff'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    control_lable
  }
});
