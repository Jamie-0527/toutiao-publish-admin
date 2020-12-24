import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 如果存在默认的子路由，父路由不需要起名字，浏览器会显示警告，但不会报错
    // name: 'layout',
    component: Layout,
    children: [{
      path: '', // 为空则是作为父组件的默认子路由
      name: 'home',
      component: Home
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
