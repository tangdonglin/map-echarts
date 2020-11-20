import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
import echarts from 'echarts'
import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8081/api'
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
