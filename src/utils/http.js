/*
 * @Author: yuyongxing
 * @Date: 2021-10-18 14:18:23
 * @LastEditors: yuyongxing
 * @LastEditTime: 2021-10-18 15:17:09
 * @Description: 
 */
import axios from 'axios';
let domain = "/stage-api/system/"
const http = axios.create({
  baseURL: domain,
  timeout: 50000
})

//http request 拦截器
http.interceptors.request.use(
    config => {
      // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
      let token = localStorage.token;
      config.headers = config.header || { 'Content-Type': 'application/json;charset=UTF-8', };
      if (token) {
        config.headers['Authorization'] = token
      }
      // if(config.responseType){
      //     config.headers['responseType']=config.responseType
      // }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  
  //http response 拦截器
  http.interceptors.response.use(response => {
  console.log("🚀 ~ file: request.js ~ line 39 ~ response", response)
    let key = "content-type"
    
    if (response.headers[key] !== "application/json") {
      // 判断是不是文件流
      return response.data
    }
    let data = response.data
    switch (data.code) {
      case 200:
        return data;
      // case 401:
      //   Message.destroy();
      //   Message.error('登录已过期');
      //   localStorage.removeItem("token");
      //   localStorage.removeItem("uid");
      //   localStorage.permission = [];
      //   // store.state.permission = [];??? state属性不可直接修改，不知道为什么这么写，先注释掉(by:yuyongxing)
      //   setTimeout(() => {
      //     window.location.reload()
      //   }, 1500)
      //   break;
      default:
        Message.destroy();
        Message.error(data.msg);
        return data;
    }
  }, error => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message.destroy();
    Message.error(message);
    return Promise.reject(error)
  }
  )
  export default http
  