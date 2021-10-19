/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:35
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-19 14:38:56
 * @Description:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { toast } from "./utils/utils"
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
import './utils/rem'

Vue.use(Mint);
// 全局方法挂载
Vue.prototype.$toast = toast
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
