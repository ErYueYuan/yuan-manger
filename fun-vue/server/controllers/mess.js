var api = require('../api');

module.exports = {
  getAllClientNewTalk: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/getAllClientNewTalk', req.body)
  },
  getOneTalkList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/getOneTalkList', req.body)
  },
  readTimeWindow: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/readTimeWindow', req.body)
  },
  getSystemNewsList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/cbsmh/mhMessageLog/fromESList', req.body)
  },
  getMessageInfo4LZG: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/cbsmh/mh/mhThirdService/getMessageInfo4LZG', req.body)
  },
  appointmentDetail: function (req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/channel/appointment/detail' , req.body)
  },
  getOfficialAccountList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funAppOfficialAccount/getOfficialAccountList' , req.body)
  },
  readTimeTalkNum: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/readTimeTalkNum' , req.body)
  },
  readTimeStateEdit: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/readTimeStateEdit' , req.body)
  },
  customerTalkEdit: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/timeConversation/customerTalkEdit' , req.body)
  },
  getVisitorRadarList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/log/fun/customerTrail/getCustomerLastTrailByUserId' , req.body)
  },
  funUserQuickContentGetList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUserQuickContent/getList' , req.body)
  },
  funUserQuickContentAddContent: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUserQuickContent/addContent' , req.body)
  },
  funUserQuickContentDeleteContent: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUserQuickContent/deleteContent' , req.body)
  },
  getFirstLevelList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUserQuickContent/getFirstLevelList' , req.body)
  },
  funUserQuickContentUpdateContent: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUserQuickContent/updateContent' , req.body)
  },
  getOperatorManageInfo: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/operatorManage/get' , req.body)
  },
  getOperatorManageQyWx: function (req, res, next) {
    api.fetch(req, res, 'GET', 'im', 'scrm-im-api/chat/operatorManage/getOperatorManage' , req.body)
  },
  getMembersTable: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/table/page' , req.body)
  },
  friendChatMessageInfo: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/friendChatMessage/page' , req.body)
  },
  groupMessageInfo: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/groupMessage/page' , req.body)
  },
  getFriendInfo: function (req, res, next) {
    api.fetch(req, res, 'GET', 'im', 'scrm-im-api/chat/friendManage/get' , req.body)
  },
  chatMessageEdit: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/friendChatMessage/edit' , req.body)
  },
  chatMessageAdd: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/friendChatMessage/add' , req.body)
  },
  getGroupFriendList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/operatorManage/get' , req.body)
  },
}