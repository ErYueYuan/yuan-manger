import axios from 'axios'
import api_home from './home'
import api_my from './my'
// axios.defaults.baseURL = //配置全局默认
axios.defaults.withCredentials = true // true：在跨域请求时，会携带用户凭证
// false：在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;  //
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//根据运行环境更换路径
let base="";
if(process.env.Node_ENV === "development"){
    base = "";
}else {
    base = "/ym"
}
// 请求拦截器
axios.interceptors.request.use(
  config => {
    //在登录模块中添加本地缓存token，然后每次发请求获取带到请求头里面
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
   
    return config
  },
  error => {
    return Promise.error(error)
  })

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('响应', JSON.parse(JSON.stringify(response.data)))
  response.data.total && store.dispatch('app/setTotal', response.data.total)

  return response
}, err)


export const POST = (params,url)=>{
    return axios.post(`${url}`,params).then(res=>res.data)
}
export const GET = (params,url)=>{
    return axios.get(`${url}`,{
        params:params,
    }).then(res=>res.data)
}
export const DELETE = (params,url)=>{
    return axios.delete(`${url}`,{
        params:params,
    }).then(res=>res.data)
}
export const PUT = (params,url)=>{
    return axios.put(`${url}`,params).then(res=>res.data)
}

export default [
    api_home,
    api_my
]