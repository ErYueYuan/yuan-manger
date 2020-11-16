import * as API from './'

export default {
  //成本
  getCustomerCost: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/pageContent/getCustomerCost', params, loadings)
    } else {
      return API.POST('/my/getCustomerCost', params, loadings)
    }
  },
  //我的   页面内容接口 
  getPageContent: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/pageContent/getPageContent', params, loadings)
    } else {
      return API.POST('/my/getPageContent', params, loadings)
    }
  },
  //修改密码
  ecloudRetrievePassword: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/user/uUserRegister/ecloudRetrievePassword', params, loadings)
    } else {
      return API.POST('/my/ecloudRetrievePassword', params, loadings)
    }
  },
  //档案详情
  myProfileDetail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/myProfileDetail', params, loadings)
    } else {
      return API.POST('/my/myProfileDetail', params, loadings)
    }
  },
  //修改档案
  updateMyProfile: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/updateMyProfile', params, loadings)
    } else {
      return API.POST('/my/updateMyProfile', params, loadings)
    }
  },


  //我的客户列表
  getCustomerSearchList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/customerSearch/getCustomerSearchList', params, loadings)
    } else {
      return API.POST('/my/getCustomerSearchList', params, loadings)
    }
  },
  getCustomerCount: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/customerSearch/getCustomerCount', params, loadings)
    } else {
      return API.POST('/my/getCustomerCount', params, loadings)
    }
  },
  getFunRenewCustomer: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/customerSearch/getFunRenewCustomer', params, loadings)
    } else {
      return API.POST('/my/getFunRenewCustomer', params, loadings)
    }
  },
  //标签
  getTags: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getTags', params, loadings)
    } else {
      return API.POST('/my/getTags', params, loadings)
    }
  },


  //业绩走势
  getAchieveTrend: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/userPrem/getAchieveTrend', params, loadings)
    } else {
      return API.POST('/my/getAchieveTrend', params, loadings)
    }
  },
  //业绩查询
  getSameDayTarget: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/target/getSameDayTarget', params, loadings)
    } else {
      return API.POST('/my/getSameDayTarget', params, loadings)
    }
  },
  getPremAchieve: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/userPrem/getPremAchieve', params, loadings)
    } else {
      return API.POST('/my/getPremAchieve', params, loadings)
    }
  },


  //营销政策
  activityList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 活动列表
      return API.POST('/funzgapi/funapi/channel/product/activity/list', params, loadings)
    } else {
      return API.POST('/my/activityOrderList', params, loadings)
    }
  },
  //文章列表
  articleList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 
      return API.POST('/funzgapi/funapi/melzg/lmGroup/articleList', params, loadings)
    } else {
      return API.POST('/my/articleList', params, loadings)
    }
  },
  //产品版本
  productVersion: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { // 本地环境
      return API.GET('/funzgapi/funapi/insure/ciVersionProduct/queryVersion/' + params.type, params, loadings)
    } else {
      return API.POST('/my/productVersion', params, loadings)
    }
  },
  //授权token
  accessToken: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { // 本地环境
      return API.POST('/funzgapi/funapi/melzg/oauth/generateAccessToken', params, loadings)
    } else {
      return API.POST('/my/accessToken', params, loadings)
    }
  },
  //营销政策
  listOneLevel: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 
      return API.POST('/funzgapi/funapi/melzg/lmGroup/listOneLevel', params, loadings)
    } else {
      return API.POST('/article/lmGroupListOneLevel', params, loadings)
    }
  },

  infoParentId: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 
      return API.POST('/funzgapi/funapi/melzg/lmGroup/infoParentId', params, loadings)
    } else {
      return API.POST('/my/infoParentId', params, loadings)
    }
  },

  //产品标签
  productTag: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 
      return API.POST('/funzgapi/funapi/channel/product/tag', params, loadings)
    } else {
      return API.POST('/my/productTag', params, loadings)
    }
  },
  //产品列表
  productList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 
      return API.POST('/funzgapi/funapi/channel/product/list', params, loadings)
    } else {
      return API.POST('/my/productList', params, loadings)
    }
  },


  //二维码
  getQrcode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 获取
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/getQrcode', params, loadings)
    } else {
      return API.POST('/my/getQrcode', params, loadings)
    }
  },
  insertQrcode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 新增
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/insertQrcode', params, loadings)
    } else {
      return API.POST('/my/insertQrcode', params, loadings)
    }
  },
  updateQrcode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 修改
      return API.POST('/funzgapi/funapi/funzg/funapp/funUser/updateQrcode', params, loadings)
    } else {
      return API.POST('/my/updateQrcode', params, loadings)
    }
  },


  //知识库
  getKnowledgeClassList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 列表
      return API.POST('/funzgapi/funapi/melzg/lmKnowledgeClass/getKnowledgeClassList', params, loadings)
    } else {
      return API.POST('/my/getKnowledgeClassList', params, loadings)
    }
  },

  getKnowledgeTitle: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 標題
      return API.POST('/funzgapi/funapi/melzg/lmKnowledgeClass/getKnowledgeTitle', params, loadings)
    } else {
      return API.POST('/my/getKnowledgeTitle', params, loadings)
    }
  },
  getDefaultLabelList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 标签
      return API.POST('/funzgapi/funapi/melzg/knowledgeLabel/getDefaultLabelList', params, loadings)
    } else {
      return API.POST('/my/getDefaultLabelList', params, loadings)
    }
  },

  getKnowledgeListByLabel: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 搜索
      return API.POST('/funzgapi/funapi/melzg/knowledge/getKnowledgeListByLabel', params, loadings)
    } else {
      return API.POST('/my/getKnowledgeListByLabel', params, loadings)
    }
  },

  getKnowledgeContent: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境 内容
      return API.POST('/funzgapi/funapi/melzg/knowledge/getKnowledgeContent', params, loadings)
    } else {
      return API.POST('/my/getKnowledgeContent', params, loadings)
    }
  },


}