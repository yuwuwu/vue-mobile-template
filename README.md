<!--
 * @Author: yuyongxing
 * @Date: 2021-10-18 11:40:44
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-11-24 14:47:11
 * @Description: 
-->
基于vue2.x+vant 的项目模板，只提供最基本的项目框架，内部已经配置好css预编译工具、路由、vuex
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

### 项目结构
```
|-- demo
    |-- .DS_Store
    |-- .browserslistrc
    |-- .env.development             测试环境配置项
    |-- .env.production              正式环境配置项
    |-- .eslintignore                eslint过滤
    |-- .eslintrc.js                 eslint
    |-- .gitignore                   git过滤
    |-- README.md                    readme
    |-- babel.config.js              babel配置项
    |-- package-lock.json            npm锁包文件
    |-- package.json                 package
    |-- vue.config.js                配置文件
    |-- yarn.lock                    yarn锁包
    |-- public    
    |   |-- favicon.ico              打包后的服务器icon
    |   |-- index.html               打包后的页面主入口文件框架
    |-- src
        |-- App.vue                  vue主入口
        |-- main.js                  main
        |-- api                      api模块，管理接口请求
        |   |-- public.js
        |-- assets                   静态文件，主要存放img
        |   |-- logo.png
        |-- components               组件
        |   |-- HelloWorld.vue
        |-- router                   路由
        |   |-- index.js
        |-- store                    vuex
        |   |-- index.js
        |-- utils                    工具类
        |   |-- common.css           公共css
        |   |-- http.js              封装axios拦截器
        |   |-- rem.js               rem适配
        |   |-- utils.js             各种工具方法
        |-- views                    页面
            |-- Home.vue
            |-- login.vue

```

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