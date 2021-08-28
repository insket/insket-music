/*
  接口请求函数  
*/
import service from './ajax.js'

//请求轮播图数据
export const getBanner = (type=0) => {
  return service({
    url:`/banner?type=${type}`,
    method:'GET'
  })
}

//调用此接口 , 可获取精品歌单
export const getGoodsMusic = (cat,limit=48) => {
  return service({
    url:`/top/playlist?cat=${cat}&limit=${limit}`,
    method:'GET'
  })
}

// 调用此接口 , 可获取新歌速递  type类型 0 全部 华语7 欧美 96 日本 8 韩国 16
export const getNewMusic = (type=7) => {
  return service({
    url:`/top/song?type=${type}`,
    method:'GET'
  })
}

//获取歌单详情
export const getSheetContainer = (id) => {
  return service({
    url:`/playlist/detail?id=${id}`,
    method:'GET'
  })
}

//获取音乐 url
export const getMusicUrl = (id) => {
  return service({
    url:`/song/url?id=${id}`,
    method:'GET'
  })
}

// 手机登录
export const login = (phone,password) => {
  return service({
    url:`/login/cellphone?phone=${phone}&password=${password}`,
    method:'GET'
  })
}