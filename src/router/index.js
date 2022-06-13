import { createRouter, createWebHashHistory } from 'vue-router';
import beforeEach from './beforEach';
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/loginPage.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export function resetRouter() {
  router.removeRoute('home');
}
router.beforeEach(beforeEach);
export default router;
