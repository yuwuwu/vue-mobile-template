/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-29 17:25:56
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import KeepAliveList from '../views/keepAlive/list.vue'
import KeepAliveDeatil from '../views/keepAlive/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "主页", keepAlive: false },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: "登录", keepAlive: false },
    component: Login
  },
  {
    path: '/keepAlive/list',
    name: 'KeepAliveList',
    meta: { title: "列表", keepAlive: true },
    component: KeepAliveList
  },
  {
    path: '/keepAlive/detail',
    name: 'KeepAliveDeatil',
    meta: { title: "详情", keepAlive: false },
    component: KeepAliveDeatil
  }
]

const router = new VueRouter({
  routes
})
// 路由守卫，修改页面标题为路由mate设置的值
router.beforeEach((to, from, next) => {
  document.title = to?.meta?.title ?? 'vue-mobile-template'
  next()
})
export default router
