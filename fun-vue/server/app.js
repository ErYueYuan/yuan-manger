let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let api = require('./api')

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: false}, {limit: '10mb'}));
app.use(cookieParser());
app.use('/funzg', express.static(path.join(__dirname, 'public')));

/**
 * @description 处理微信用户登录
 * @param weixin
 * url为微信公众号进入链接
 */
let weixin = function (req, res) {
  let url = req.path.replace("/funzg/wx/", "").replace('/', '-'), openid;
  if (req.query.code) {
    let redirect = function () {
      if (url) {
        console.log('\n' + '=====微信公众号跳转到系统路径===============' + '\n' + 'url：', url);
        res.redirect("/funzg/loginWx/" + openid + "/" + url);
      } else {
        console.log('\n' + '=====微信公众号跳转到login===============' + '\n' + 'openid：', openid);
        res.redirect("/funzg/login?openid=" + openid);
      }
    }
    api.fetch_wx(req, res, ' https://api.weixin.qq.com/sns/oauth2/access_token?appid=' + api.appid + '&secret=' + api.secret + '&code=' + req.query.code + '&grant_type=authorization_code', function (tokenObj) {
      api.fetch_wx(req, res, 'https://api.weixin.qq.com/sns/userinfo?access_token=' + tokenObj.access_token + '&openid=' + tokenObj.openid + '&lang=zh_CN', function (userinfo) {
        if (userinfo.errcode) {
          console.log('\n' + '===========重定向到授权页==================' + '\n' + '重定向路径:', api.appRootUrl + req.path);
          let reUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + api.appid + "&redirect_uri=" + api.appRootUrl + encodeURIComponent(req.path) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          res.redirect(reUrl);
          return;
        }
        console.log('\n' + '===========openid==================' + '\n' + 'userinfo:', userinfo);
        openid = userinfo['openid'];
        let _data = {
          openid: userinfo['openid'],
          saasId: 'ff5a67337b6611e89feafa163eb3e537',
          head: userinfo['headimgurl'],
          name: userinfo['nickname'],
          sex: userinfo['sex'],
        };
        api.fetch(req, res, 'POST', 'funzg', 'funapi/funzg/funapp/funUser/wx/register', _data, function (data) {
          if (data.status == 'SUCCESS') {
            redirect();
          } else {
            console.log('\n' + '==========注册失败重新去注册==============');
            let reUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + api.appid + "&redirect_uri=" + api.appRootUrl + encodeURIComponent(req.path) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            res.redirect(reUrl);
          }
        })
      })
    })
  } else {
    console.log('\n' + '==========未获取到code重定向到授权页==============');
    let reUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + api.appid + "&redirect_uri=" + api.appRootUrl + encodeURIComponent(req.path) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
    res.redirect(reUrl);
  }
}

app.get('/funzg/wx/:share', function (req, res, next) {//微信公众号进入处理
  console.log('\n' + '=====微信公众号进入===============' + '\n' + 'req.query.code', req.query.code);
  weixin(req, res);
});

app.use(require('./mw')());//请求处理中间件


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log("=====error====:", err.message)
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;