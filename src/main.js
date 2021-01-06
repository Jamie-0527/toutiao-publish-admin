import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/styles/index.less'
import 'nprogress/nprogress.css'
// 引入 Element
import ElementUI from 'element-ui'
import { ElementTiptapPlugin } from 'element-tiptap'
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css'
// import element-tiptap 样式
import 'element-tiptap/lib/index.css'

// 安装 ElementUI 插件
Vue.use(ElementUI)
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, { lang: 'zh' })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
