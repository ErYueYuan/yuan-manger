import * as API from './'

export default {
  // 服务状态
  chOrderStatus: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/funzgapi/funapi/config/sysDict/childDictList/ch_order_status', params, loadings)
    } else {
      return API.POST('/deal/chOrderStatus', params, loadings)
  }
  },
  //险种信息
  chRiskType: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/funzgapi/funapi/config/sysDict/childDictList/ch_risk_type', params, loadings)
    } else {
       return API.POST('/deal/chRiskType',params,loadings)
    }
  },
  //列表
  orderList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funOrder/orderList', params, loadings)
    } else {
      return API.POST('/deal/orderList',params,loadings)
    }
  },
  //未完成
  ordersDet: (params, loadings) => { // 订单详情接口
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/insure/page/ordersDetail', params, loadings)
    } else {
      return API.POST('/deal/orderpage', params, loadings)
    }
  },
  //保单详情 已完成
  orderDetails: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/cbspolicy/policyInfo/findPolicyInfo', params, loadings)
    } else {
      return API.POST('/deal/orderDetails',params,loadings)
    }
  },


}
