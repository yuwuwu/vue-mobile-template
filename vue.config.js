/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:54:11
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-12-14 17:35:32
 * @Description:
 */

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  assetsDir: './',
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy: null,
    // proxy: {
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: ``,
    //     changeOrigin: true,
    //     ws: true,
    //     secure: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: '/stage-api'
    //     }
    //   }
    // },
    disableHostCheck: true
  }
}
