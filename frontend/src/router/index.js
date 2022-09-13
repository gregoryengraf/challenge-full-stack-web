import { createRouter, createWebHistory } from 'vue-router';
import Student from '../views/Student.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Student,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

