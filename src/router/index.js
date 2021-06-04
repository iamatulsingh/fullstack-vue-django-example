import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/Posts'
import Login from '../views/Login'
import Logout from '../views/Logout'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
