var api = require('../api');

module.exports = {
  productTag: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/channel/product/tag', req.body)
  },
  productList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/channel/product/list', req.body)
  },
  visitorProductList: function(req, res, next){
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/product/visitor/list',req.body);
  },
}
