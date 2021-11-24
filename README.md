<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:44
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-11-24 14:27:25
 * @Description: 
-->
基于vue2.x+vant 即开即用的项目模板，内部已经配置好css预编译工具、路由、vuex
# vue-mobile-template

环境基于 vue: 2.6.11,vue/cli: 4.5.13, node:v12.13.1

## Project setup
```
npm install
yarn install
```

### Compiles and hot-reloads for development
```
npm run serve
yarn run serve
```

### Compiles and minifies for production
```
npm run build
yarn run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 如需按需加载vant

```
# 安装插件
npm i babel-plugin-import -D
```
```
// 在.babelrc 中添加配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
```