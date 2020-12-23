import axios from 'axios'

// 创建 axios 实例，就是复制一个 axios 方便调用处理，同时存在多个地址时
const request = axios.create({
  // 请求基础路径，相当于localhost:8080/
  baseURL: ''
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要使用谁就加载 request 模块
// import request from 'request.js'
// request.xxx
// request({
//   method: ,
//   url: ''
// })
