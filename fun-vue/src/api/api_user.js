import * as API from './'

export default {
  login: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/login', params, loadings)
    } else {
      return API.POST('/user/login', params, loadings)
    }
  },
  // 发送短信验证码
  smsCode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/cbsmh/mhMessage/smsCode', params, loadings)
    } else {
      return API.POST('/user/smsCode', params, loadings)
    }
  },
  // 验证短信验证码
  verifySMSCode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/cbsmh/mhMessage/verifySMSCode', params, loadings)
    } else {
      return API.POST('/user/verifySMSCode', params, loadings)
    }
  },
  loginByOpenid: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/loginByOpenid', params, loadings)
    } else {
      return API.POST('/user/loginByOpenid', params, loadings)
    }
  },
  unbind4WX: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/unbind4WX', params, loadings)
    } else {
      return API.POST('/user/unbind4WX', params, loadings)
    }
  },
  bindWx: (params, loadings) => {
  if (process.env.NODE_ENV === 'development') {
    return API.POST('/funzgapi/funapi/funzg/funapp/funUser/bind4WX', params, loadings)
  } else {
    return API.POST('/user/bindWx', params, loadings)
  }
},
  register: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/user/uChannelRegister/register', params, loadings)
    } else {
      return API.POST('/user/register', params, loadings)
    }
  },
  //分享签名
  jsapiticket: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/config/funzg/jsapiticket', params, loadings)
    } else {
      return API.POST('/user/jsapiticket', params, loadings)
    }
  },
  // 重置密码
  retrievePassword: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/user/uUserRegister/ecloudRetrievePassword', params, loadings)
    } else {
      return API.POST('/user/retrievePassword', params, loadings)
    }
  },
  // 迁出迁入及状态更改
  statusMove: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funUserSign/statusMove', params, loadings)
    } else {
      return API.POST('/user/statusMove', params, loadings)
    }
  },
  // 当月目标值
  getTargetPrem: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/target/getTargetPrem', params, loadings)
    } else {
      return API.POST('/user/getTargetPrem', params, loadings)
    }
  },
  // 当月日目标值
  getSameDayTarget: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/target/getSameDayTarget', params, loadings)
    } else {
      return API.POST('/user/getSameDayTarget', params, loadings)
    }
  },
  // 用户迁入迁出及工作状态查询
  getUserSignStatuss: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funUserSign/getUserSignStatuss', params, loadings)
    } else {
      return API.POST('/user/getUserSignStatuss', params, loadings)
    }
  },
  // 用户迁入迁出及工作状态修改
  signStatusMove: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funUserSign/statusMove', params, loadings)
    } else {
      return API.POST('/user/signStatusMove', params, loadings)
    }
  },
  // 客户状态数量
  queryCustomerStatusCount: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryCustomerStatusCount', params, loadings)
    } else {
      return API.POST('/user/queryCustomerStatusCount', params, loadings)
    }
  },
  // 首页今日客户进展接口
  getCustomerProgress: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/homePage/getCustomerProgress', params, loadings)
    } else {
      return API.POST('/user/getCustomerProgress', params, loadings)
    }
  },
  // 首页今日消息沟通接口
  getMessageChat: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/homePage/getMessageChat', params, loadings)
    } else {
      return API.POST('/user/getMessageChat', params, loadings)
    }
  },
  // 首页今日数据当月统计接口数据
  getMonthStatistics: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/homePage/getMonthStatistics', params, loadings)
    } else {
      return API.POST('/user/getMonthStatistics', params, loadings)
    }
  },
  // 计划书列表
  proposalList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/proposal/list', params, loadings)
    } else {
      return API.POST('/user/proposalList', params, loadings)
    }
  },
  // 本月业绩环状图查询
  getAchievement: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/achievement/getAchievement', params, loadings)
    } else {
      return API.POST('/user/getAchievement', params, loadings)
    }
  },
  // 获取用户在线时长
  getAppUserOnlineDuration: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/log/onlineDurationStatistics/getAppUserOnlineDuration', params, loadings)
    } else {
      return API.POST('/user/getAppUserOnlineDuration', params, loadings)
    }
  },

}