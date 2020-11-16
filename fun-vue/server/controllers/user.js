var api = require('../api');

module.exports = {
  login: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/login', req.body)
  },
  smsCode: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/cbsmh/mhMessage/smsCode', req.body)
  },
  verifySMSCode: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/cbsmh/mhMessage/verifySMSCode', req.body)
  },
  loginByOpenid: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/loginByOpenid', req.body)
  },
  bindWx: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/bind4WX', req.body)
  },
  unbind4WX: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/unbind4WX', req.body)
  },
  register: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/user/uChannelRegister/register', req.body)
  },
  jsapiticket: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/config/funzg/jsapiticket', req.body)
  },
  retrievePassword: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/user/uUserRegister/ecloudRetrievePassword', req.body)
  },
  statusMove: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funUserSign/statusMove', req.body)
  },
  getTargetPrem: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/target/getTargetPrem', req.body)
  },
  getSameDayTarget: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/target/getSameDayTarget', req.body)
  },
  getUserSignStatuss: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funUserSign/getUserSignStatuss', req.body)
  },
  signStatusMove: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funUserSign/statusMove', req.body)
  },
  queryCustomerStatusCount: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryCustomerStatusCount', req.body)
  },
  getCustomerProgress: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/homePage/getCustomerProgress', req.body)
  },
  getMessageChat: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/homePage/getMessageChat', req.body)
  },
  getMonthStatistics: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/homePage/getMonthStatistics', req.body)
  },
  proposalList: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/proposal/list', req.body)
  },
  getAchievement: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/achievement/getAchievement', req.body)
  },
  getAppUserOnlineDuration: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/log/onlineDurationStatistics/getAppUserOnlineDuration', req.body)
  },
}