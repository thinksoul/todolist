import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/todolist'
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import(/* webpackChunkName: "test" */ '../views/todolist.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
