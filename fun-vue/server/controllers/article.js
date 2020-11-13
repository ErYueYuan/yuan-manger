var api = require('../api');

module.exports = {
  articleClassList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/articleclass/classList', req.body)
  },
  articleManagerList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/articleManager/list', req.body)
  },
  increaseReadCount: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/articleread/increaseReadCount', req.body)
  },
  getArticleDetail: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/articleManager/getArticleDetail', req.body)
  },
  funzgGroupListOneLevel: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/funzgGroup/listOneLevel', req.body)
  },
  funzgGroupArticleList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/funzgGroup/articleList', req.body)
  },
  courseClassList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/courseclass/list', req.body)
  },
  courseList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/course/list', req.body)
  },
  lmGroupListOneLevel: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmGroup/listOneLevel', req.body)
  },
  lmGroupArticleList: function (req, res, next) {
    api.fetch(req, res, 'POST', 'funzg', 'funapi/melzg/lmGroup/articleList', req.body)
  },
}
