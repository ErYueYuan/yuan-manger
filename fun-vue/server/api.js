let request = require('request')
/**
 * @description 服务器部署配置信息
 * @param null
 * baseUrl：请求后台接口路径；ekBaseUrl：供node调用路径；appRootUrl,secret：企业微信密钥信息
 * 注：EK后台GET请求为params入参方式。
 */
let baseUrl, _url, options,
  funzgBaseUrl = 'http://devfh.funzg.net/',
  imBaseUrl = 'https://test.zhonglianhuanxin.com/'
module.exports = {
  appRootUrl: 'http://devfh.funzg.net',
  appid: 'wxfc31d19d147b8152',
  secret: 'f01549bf8c4388cf3b338356da2fb930',
  fetch: function (rq, res, method, type, uri, data, cb) {
    switch (type) {
      case 'funzg':
        baseUrl = funzgBaseUrl
        break
      case 'im':
        baseUrl = imBaseUrl
        break
      default:
        baseUrl = ''
    }
    if (method == 'GET') {
      data = {
        _t: Date.parse(new Date()) / 1000,
        ...data
      }
      _url = baseUrl + uri + '/' + (data.type ? data.type : '')
    } else {
      _url = baseUrl + uri
    }
    console.log('\n' + '============headers=================' + '\n' + uri + ' .headers:', rq.headers)
    options = {
      headers: {
        'token': rq.headers['token'] ? rq.headers['token'] : '',
        'userid': rq.headers['userid'] ? rq.headers['userid'] : '',
        'saasid': rq.headers['saasid'] ? rq.headers['saasid'] : '',
        'fun': rq.headers['fun'] ? rq.headers['fun'] : '',
        'Authorization': rq.headers['authorization'] ? rq.headers['authorization'] : ''
      },
      url: _url,
      method: method,
      json: true,
      body: data
    }
    let callback = function (error, response, rt) {
      if (!error && response.statusCode == 200) {
        console.log('\n' + '============出参success=================' + '\n' + uri + ' .response:', rt)
        if (typeof cb === 'function') {
          try {
            cb(JSON.parse(rt))
          } catch (e) {
            cb(rt)
          }
        } else {
          try {
            res.send(JSON.parse(rt))
          } catch (e) {
            res.send(rt)
          }
        }
      } else {
        console.log('\n' + '============出参error=================' + '\n' + uri + ' .response:', rt)
        if (response && response.statusCode) {
          res.send(rt)
        } else {
          res.sendStatus(401)
        }
      }
    }
    console.log('\n' + '============入参==============' + '\n' + 'options', options)
    request(options, callback)
  },
  fetch_wx: function (rq, res, uri, cb) {
    let options = {
      url: uri,
      method: 'GET',
      json: true
    }
    let callback = function (error, response, rt) {
      if (!error && response.statusCode == 200) {
        console.log('\n' + '===========================' + '\n' + uri + ' .response:', rt)
        if (typeof cb === 'function') {
          try {
            cb(JSON.parse(rt))
          } catch (e) {
            cb(rt)
          }
        } else {
          try {
            res.send(JSON.parse(rt))
          } catch (e) {
            res.send(rt)
          }
        }
      } else {
        res.send('<html><body><h1>' + error + '</h1></body></html>')
      }
    }
    console.log('\n' + '============================' + '\n' + 'options', options)
    request(options, callback)
  }
}
