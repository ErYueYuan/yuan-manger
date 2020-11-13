var api = require('../api');

module.exports = {
  chOrderStatus: function (req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/config/sysDict/childDictList/ch_order_status', req.body)
  },
  chRiskType: function (req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/config/sysDict/childDictList/ch_risk_type', req.body)
  },
  orderList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funOrder/orderList', req.body)
  },
  orderDetails: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/cbspolicy/policyInfo/findPolicyInfo', req.body)
  },
  orderpage: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/insure/page/ordersDetail', req.body)
  }
}
