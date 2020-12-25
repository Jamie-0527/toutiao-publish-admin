import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/styles/index.less'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
