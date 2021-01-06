import * as API from './'
export default {
       login:(params,loading)=>{
              if(process.env.NODE_ENV == 'development'){
                     return API.POST('/ym/login',params,)
              }else {
                     return API.POST('/ym/deng/login')
              }
       }
}