var api = require('../api');

module.exports = {
  getVerifyCode: function(req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/funzg/funapp/drawImage/getVerifyCode', req.body)
  },
  checkVerifyCode: function(req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/funzg/funapp/drawImage/verifyCode', req.body)
  },
  advertismentList4Front: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/advertisment/advertismentList4Front', req.body)
  },
  cosGetSign: function(req, res, next) {
    api.fetch(req, res, 'GET', 'funzg', 'funapi/config/tpTencent/cos/sign', req.body)
  },
  imageOCR: function(req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/config/ocr', req.body)
  },
}
