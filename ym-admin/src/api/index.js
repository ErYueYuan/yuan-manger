import axios from 'axios'
import storage from 'store';
//工具库 loadsh
import lodash from 'lodash/get'
axios.defaults.withCredentails = true;
//异常拦截处理器
const errorHanlor = (error) => {
       let state = get(error, 'response.status')
       switch (state) {
              /* eslint-disable no-param-reassign */
              case 400:
                     error.message = '请求错误';
                     break;
              case 401:
                     error.message = '未授权，请登录';
                     break;
              case 403:
                     error.message = '拒绝访问';
                     break;
              case 404:
                     error.message = `请求地址出错: ${error.response.config.url}`;
                     break;
              case 408:
                     error.message = '请求超时';
                     break;
              case 500:
                     error.message = '服务器内部错误';
                     break;
              case 501:
                     error.message = '服务未实现';
                     break;
              case 502:
                     error.message = '网关错误';
                     break;
              case 503:
                     error.message = '服务不可用';
                     break;
              case 504:
                     error.message = '网关超时';
                     break;
              case 505:
                     error.message = 'HTTP版本不受支持';
                     break;
              default:
                     break;
                     /* eslint-disabled */
       }
       return Promise.reject(error)
}

//环境变量
let base = '';
if (process.env.NODE_ENV == "production") {
       base = '';
} else {
       base = '/ym'
}
//请求拦截
axios.intereptors.request.use((config) => {
       //验证token
       //让每个请求携带token
       config.headers.Authorization = `bearer ${storage.get('ACCESS_TOKEN')}`;
       if (config) {
              console.log(config);
              return config
       }
       return Promise.reject(config)
}, errorHanlor)

//响应拦截
axios.intereptors.response.use((config) => {
       if (config) {
              const {
                     data
              } = config.data;
              if (data === undefined) {
                     return data;
              } else {
                     switch (data) {
                            case 200:
                                   // [ 示例 ] code === 200 代表没有错误
                                   return config.data;
                            default:
                                   // 不是正确的 code
                                   return '不是正确的code';
                     }
              }

       }
})

//通过方法
export const POST = (params, url, loading) => {
       return axios.post(`${base}${url}`,params, loading).then(res => {
              res.data
       })
}
export const GET = (params,url,loading)=>{
       return axios.get(`${base}${url}`,{
              params:params,
              loading:loading
       }).then(res=>res.data)
}
export const PUT = (params,url)=>{
       return axios.put(`${base}${url}`,par)
}
export const DELETE = (params,url)=>{
       return axios.delete(`${base}${url}`,{
              params:params
       }).then(res=>res.data)
}
export {
       

}