/**
 * Created by dai.
 * http请求
 */

import axios from 'axios'
import api_user from './api_user.js'
import api_system from './api_system'
import api_statistics from './api_statistics'
import api_product from './api_product'
import api_sell from './api_sell'
import api_service from './api_service'
import api_mess from './api_mess'
import api_article from './api_article'
import api_my from './api_my'

import { Toast } from 'vant'
import * as tool from '@/common/Tool'
import DataSource from '@/common/DataSource';


axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头

let loading, base = '';
let loadingRequestCount = 0;
if (process.env.NODE_ENV === 'development') {
  base = ''
} else {
  base = '/funzg'
}


function startLoading(options) {
  loading = Toast.loading({
    message: options.loadingText || 'Loading......',
    forbidClick: true,
    loadingType: 'spinner',
  });
}

function endLoading() {
  loading.close()
}

export function showLoading(options) {
  if (loadingRequestCount === 0) {
    startLoading(options)
  }
  loadingRequestCount++
}

export function closeLoading() {
  if (loadingRequestCount <= 0) {
    return;
  }
  loadingRequestCount--
  if (loadingRequestCount === 0) {
    endLoading()
  }
}

const err = (error) => {
  endLoading()
  if (error.response) {
    let data = error.response.data
    const token = DataSource.get('token', 1)
    console.log('------异常响应------', token)
    console.log('------异常响应------', error.response.status)
    switch (error.response.status) {
      case 403:
        tool.toastMessage('拒绝访问', 'warn')
        break
      case 500:
        if (token && data.message == 'Token失效，请重新登录') {
          tool.toastMessage('登录已过期，请重新登录!', 'warn')
          window.location.href = "/";
        }
        break
      case 404:
        tool.toastMessage('很抱歉，资源未找到!', 'error')
        break
      case 504:
        tool.toastMessage('网络超时!', 'error')
        break
      case 401:
        tool.toastMessage('登录已过期，请重新登录!', 'error')
        window.location.href = "/";
        break
      case 502:
        tool.toastMessage('接口服务异常，请稍后重试!', 'error')
        break
      default:
        tool.toastMessage(data.message, 'error')
        break
    }
  }
  return Promise.reject(error)
}

//添加一个请求拦截器
axios.interceptors.request.use(
  config => {
    const token = DataSource.get('token', 1)
    const userInfo = DataSource.get('userInfo', 1)
    if (token) {
      config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
      config.headers['userid'] = userInfo.userInfo.userId ? userInfo.userInfo.userId : ''
      config.headers['saasid'] = tool.app.saasId
      config.headers['fun'] = userInfo.fun
      config.headers['Authorization'] = userInfo.token_im
    }
    if (config.method == 'post' && config.showLoadingFlag != 'N') {
      showLoading(config);
    }
    if (config.method == 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.config.method == 'post' && response.config.showLoadingFlag != 'N') {
    closeLoading();
  }
  return response;
}, err);


//通用方法
export const POST = (url, params, loadings) => {
  return axios.post(`${base}${url}`, params, loadings).then(res => res.data)
}

export const GET = (url, params, loadings) => {
  return axios.get(`${base}${url}`, {
    params: params,
    loadings: loadings
  }).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}

export {
  api_user,
  api_system,
  api_statistics,
  api_product,
  api_sell,
  api_service,
  api_mess,
  api_article,
  api_my
}