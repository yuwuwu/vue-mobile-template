/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-25 17:39:51
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: "主页", keepAlive: true },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: "登录", keepAlive: true },
    component: Login
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
