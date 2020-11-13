let fs = require('fs');
let path = require('path');
let os = require('os');
let fileList = [], routes = {};

//遍历controllers文件
let walk = function (dir) {
  let p = fs.readdirSync(dir)
  p.forEach(function (item) {
    let _p = path.join(dir, item)
    if (fs.statSync(_p).isDirectory()) {
      walk(_p)
    } else {
      fileList.push(_p)
    }
  })
};
walk(path.join(__dirname, 'controllers'));


//配置路由对应方法
fileList.forEach(function (item) {
  let _module = require(item);
  let _file = '';
  if (os.type() == 'Linux') {
    _file = item.split('/')
  } else {
    _file = item.split('\\')//linux 发布时候注意：要用 var _file = item.split('/')
  }
  let moduleName = _file[_file.length - 1].split('.')[0];
  routes[moduleName] = {};
  for (let action in _module) {
    let handler = _module[action]
    routes[moduleName][action] = handler
  }
})
module.exports = function () {
  return function (req, res, next) {
    // console.log('\n' + 'req.path:', req.path)
    let pathName = req.path;
    let controll = pathName.split('/')[2] || 'index;';
    let action = pathName.split('/')[3] || 'index';
    // console.log('\n' + 'controll:', controll, 'action:', action)
    let go = function () {
      if (routes[controll] && routes[controll][action]) {
        return routes[controll][action](req, res, next)
      } else {
        return res.sendFile(path.join(__dirname, 'public/index.html'))
      }
    };
    return go()
  }
}

