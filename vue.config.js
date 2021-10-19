
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  assetsDir: './',
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: ``,
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '/stage-api'
        }
      }
    },
    disableHostCheck: true
  }
}
