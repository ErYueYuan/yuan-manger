var api = require('../api');

module.exports = {
    getCustomerSearchList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/customer/funapp/customerSearch/getCustomerSearchList', req.body)
    },
    getCustomerList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getCustomerList', req.body)
    },
    sysDict: function (req, res, next) {
        api.fetch(req, res, 'GET', 'funzg', 'funapi/user/uPersonalCenter/sysDict', req.body)
    },
    queryBasicIntroduction: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryBasicIntroduction', req.body)
    },
    getCustomerDetail: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getCustomerDetail', req.body)
    },
    getFamilyList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getFamilyList', req.body)
    },
    getTags: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getTags', req.body)
    },
    getCustomerProduct: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/customer/funzg/customerProduct/getCustomerProduct', req.body)
    },
    getProductTag: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/customer/funzg/customerProduct/getProductTag', req.body)
    },
    queryFollowUpList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryFollowUpList', req.body)
    },
    queryCustomerTags: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryCustomerTags', req.body)
    },
    queryCustomerPortrait: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryCustomerPortrait', req.body)
    },
    editCustomerTags: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/editCustomerTags', req.body)
    },
    getCustomerInteract: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/customerInteract/getCustomerInteract', req.body)
    },
    // getCustomerLastTrail: function (req, res, next) {
    //     api.fetch(req, res, 'POST', 'funzg', 'funapi/log/fun/customerTrail/getCustomerLastTrail', req.body)
    // },
    queryProposalList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/proposal/list/customer', req.body)
    },
    delProposalList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/proposal/delete', req.body)
    },
    addFamilyMember: function (req, res, next) {
        // api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/family/addFamilyMember', req.body)
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/addFamilyMember', req.body)
    },
    addFollowUp: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/addFollowUp', req.body)
    },
    getFollowInfo: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/getFollowInfo', req.body)
    },
    editFollowUp: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/editFollowUp', req.body)
    },
    updateCustomerDetail: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/updateCustomerDetail', req.body)
    },
    sysArea: function (req, res, next) {
        api.fetch(req, res, 'GET', 'funzg', 'funapi/config/cbsconfig/sysArea/list', req.body)
    },
    sysOccup: function (req, res, next) {
        api.fetch(req, res, 'GET', 'funzg', 'funapi/config/sysDict/childDictList', req.body)
    },
    customerOrderList: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funOrder/customerOrderList', req.body)
    },
    getCusVisitTrail: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/customer/funapp/cusVisitTrail/getCusVisitTrail', req.body)
    },
    queryOrderLog: function (req, res, next) {
        api.fetch(req, res, 'GET', 'funzg', 'funapi/insure/orderLog/list', req.body)
    },
    getAgentAccess: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/agentAccess/getAgentAccess', req.body)
    },
    assignAgentData: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/agentAccess/assignAgentData', req.body)
    },
    customerAdd: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/customerAdd', req.body)
    },
    queryCustomerPortraitDetail: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/queryCustomerPortraitDetail', req.body)
    },
    addFriends: function (req, res, next) {
        api.fetch(req, res, 'POST', 'im', 'scrm-im-api/chat/record/add' , req.body)
    },
    editAddWeChatStatus: function (req, res, next) {
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/digitalMarketing/editAddWeChatStatus', req.body)
    },
    
}
