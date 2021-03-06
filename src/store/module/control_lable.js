// import Vue from 'vue'
const state = {
  isPC: (function () {
    const flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return !flag;
  })(),
  menufold: localStorage.getItem('menufold') == 'false' ? false : true
};
const mutations = {
  changefold(state) {
    console.log();
    state.menufold = !state.menufold;
    localStorage.setItem('menufold', Boolean(state.menufold));
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
