import VueRouter from 'vue-router';
import VStudents from '../views/Student.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: VStudents,
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router;

