import { createRouter, createWebHistory } from 'vue-router';
import Student from '../views/Student.vue';
import CreateStudent from '../views/CreateStudent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Student,
  },{
    path: '/create-student',
    name: 'createStudent',
    component: CreateStudent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;

