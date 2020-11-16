import * as API from './'

export default {
  // 查询今日访客柱状图
  getCustomerTrail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/log/fun/customerTrail/getCustomerTrail', params, loadings)
    } else {
      return API.POST('/statistics/getCustomerTrail', params, loadings)
    }
  },
  // 查询访问轨迹
  getVisitTrail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/log/fun/customerTrail/getVisitTrail', params, loadings)
    } else {
      return API.POST('/statistics/getVisitTrail', params, loadings)
    }
  },
  // 首页查询热门轨迹记录
  getHotVisitTrail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/log/fun/customerTrail/getHotVisitTrail', params, loadings)
    } else {
      return API.POST('/statistics/getHotVisitTrail', params, loadings)
    }
  },
}