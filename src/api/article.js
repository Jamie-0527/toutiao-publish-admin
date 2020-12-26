/**
 * 文章相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取文章列表
 */
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    // Body 参数使用 data 设置
    // Query 参数使用 params 设置
    // Headers 参数使用 headers 设置
    params,
    // 在 axios 中通过 headers 选项设置请求头参数
    headers: {
      // 名字: 值
      // 因为 axios 发送的请求默认会设置 'Content-Type': 'application/json'
      'Content-Type': 'application/json',

      Authorization: window.localStorage.getItem('user')
    }
  })
}

/**
 * 获取文章频道
 */
export const getArticleChannels = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/channels'
  })
}
