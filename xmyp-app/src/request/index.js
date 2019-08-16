import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()
ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'triple-bounce'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.status === 200) {
    return resp.data
  } else {
    return resp
  }
})
// 得到mall，的列表数据
export const getTabs = () => ajax.get('api/tabs?sa=')
// 请求主要的轮播图数据
export const getBanners = () => ajax.get('/homepage/main/v1003?platform=m')

// export const getDetail = () => ajax.get('http://rap2api.taobao.org/app/mock/166392/home/get')
export const getDetail = (id) => ajax.get(`/api/detail?id=${id}`)

export const getlistItem = (id) => ajax.get(`/api/tab/${id}`)
// 请求列表页的数据
export const getlist = (id, url, nextIndex) => ajax.get(`/api/${url}/${id}/items?start=${nextIndex}`)
// 请求列表页的一张图片
export const getlistImg = (id, url) => ajax.get(`/api/${url}/${id}`)

// 请求购物车页面的推荐数据
export const getRecommended = (nextIndex) => ajax.get(`/api/tab/1/feeds?start=${nextIndex}&sort=0`)
// 获取taste的列表数据
export const getproduct = (nextIndex) => ajax.get(`/api/tab/1/feeds?start=${nextIndex}&sort=0`)
// export const getProductDetail = (id) => ajax.get('/api/detail', { params: { id } })

export const getProductDetail = (id) => ajax.get(`/api/detail?id=${id}`)
// 请求登录接口
export const postUser = ({ username, password }) => ajax.post('http://rap2api.taobao.org/app/mock/166392/login', { username, password })
