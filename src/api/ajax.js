/*
    对axios进行二次封装   可以额外iderangaxios发请求的时候具有其他功能
    配置路径和超时限制
    返回的响应不需要从data中拿数据，相应就是需要的数据
    统一处理请求错误，具体可以选择处理或不处理
*/ 

import axios from "axios";

//创建一个新的和axios具有相同功能的实例
const service = axios.create({
  baseURL:'http://localhost:3000',
  timeout:10000
})


//请求拦截器
service.interceptors.request.use((config) => {
  return config
},(error) => {
  return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use((response) => {
  return response.data
},(error) => {
  alert('发送请求失败',error.message||'未知错误')   //统一处理错误
  return Promise(() => {})
});

export default service
