import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Echarts = () => import(/* webpackChunkName:"echarts" */ '../views/index.vue')
const PageView = () => import(/* webpackChunkName:"pageview" */ '../views/chart/PageView.vue')

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/echarts' }, // 重定向到login地址
    { path: '/echarts', component: Echarts },
    { path: '/pageview', component: PageView }
  ]
})

export default router
