import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
import Article from '@/views/article'
import NProgress from 'nprogress'

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
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 获取本地的 token
const user = window.JSON.parse(window.localStorage.getItem('user'))

router.beforeEach((to, from, next) => {
  // 开启顶部导航进度条特效
  NProgress.start()

  // 停止导航
  // 我们可以在一些特殊情况下，停留在当前页面，中断当前导航
  // next(false)
  // to:到哪里去  from：从哪里来 next：放行方法
  // 如果是登录页面直接方行
  if (to.path !== '/login') {
    if (user) {
      // 已登录，放行
      next()
    } else {
      // 未登录
      next('/login')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // 结束顶部的导航进度条
  NProgress.done()
})

export default router
