/* 封装用户请求模块 */
import request from '@/utils/request'

export function login (query) {
  return request({
    method: 'POST',
    url: '/toLogin',
    // 用来设置 POST 请求体参数
    params: query
  })
}
