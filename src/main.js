/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-11-24 14:25:43
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { toast } from "./utils/utils"

import Vant from 'vant';
import 'vant/lib/index.css';

import './utils/rem'
import './utils/common.css'

Vue.use(Vant);
// 全局方法挂载
Vue.prototype.$toast = toast
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
