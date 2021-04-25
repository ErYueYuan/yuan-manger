var express = require('express');
var router = express.Router();
const Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/data',function (req,res){
  res.json(Mock.mock({
    'status': 200,
    'dataSource|1-9': [{
      'key|+1': 1,
      'mockTitle|1': ['肆无忌惮'],
      'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
      'mockAction|1': ['下载', '试听', '喜欢'],
      'zf|1-100': 1,
      'pl|1-100': 20,
      'sex|0-1': 0,
      'name': Mock.mock('@cname'),
      'headImg': '@image()',
      'city': Mock.mock('@city')

    }]
  }))
})

module.exports = router;
