import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

// 引入elementUI
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'
// 引入图标
import './assets/fonts/iconfont.css'

// 引入axios并挂载到vue对象上
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
