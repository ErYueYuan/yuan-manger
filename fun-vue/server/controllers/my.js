var api = require('../api');

module.exports = {
  getCustomerCost: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/pageContent/getCustomerCost', req.body)
  },

  getPageContent: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/pageContent/getPageContent', req.body)
  },

  //修改密码
  ecloudRetrievePassword: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/user/uUserRegister/ecloudRetrievePassword', req.body)
  },

  /**
   * 档案
   */
  //档案详情
  myProfileDetail: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/myProfileDetail', req.body)
  },
  //档案上传
  updateMyProfile: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/updateMyProfile', req.body)
  },


  /**
   * 我的客户
   */
  getCustomerSearchList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/customerSearch/getCustomerSearchList', req.body)
  },
  getCustomerCount: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/customerSearch/getCustomerCount', req.body)
  },
  getFunRenewCustomer: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/customerSearch/getFunRenewCustomer', req.body)
  },
  getTags: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getTags', req.body)
  },

  /**
   * 业绩
   */
  getAchieveTrend: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/userPrem/getAchieveTrend', req.body)
  },
  getSameDayTarget: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/target/getSameDayTarget', req.body)
  },
  getPremAchieve: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/userPrem/getPremAchieve', req.body)
  },


  /**
   * 营销政策
   */
  activityOrderList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/channel/product/activity/list', req.body)
  },
  //文章列表
  articleList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmGroup/articleList', req.body)
  },
  //产品标签
  productTag: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/channel/product/tag', req.body)
  },
  //产品列表
  productList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/channel/product/list', req.body)
  },
  //文章tagId
  infoParentId: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmGroup/infoParentId', req.body)
  },
  //产品版本
  productVersion: function (req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/insure/ciVersionProduct/queryVersion', req.body)
  },
  //获取授权token
  accessToken: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/oauth/generateAccessToken', req.body)
  },

  /**
   * 二维码
   */
  getQrcode: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/getQrcode', req.body)
  },
  //新增二维码
  insertQrcode: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/insertQrcode', req.body)
  },
  //修改二维码
  updateQrcode: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/updateQrcode', req.body)
  },


  /**
   * 知识库
   */
  //列表
  getKnowledgeClassList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmKnowledgeClass/getKnowledgeClassList', req.body)
  },
  //标签
  getKnowledgeTitle: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmKnowledgeClass/getKnowledgeTitle', req.body)
  },
  //标题
  getDefaultLabelList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/knowledgeLabel/getDefaultLabelList', req.body)
  },
  //搜索
  getKnowledgeListByLabel: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/knowledge/getKnowledgeListByLabel', req.body)
  },
  //内容
  getKnowledgeContent: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/knowledge/getKnowledgeContent', req.body)
  },

}
