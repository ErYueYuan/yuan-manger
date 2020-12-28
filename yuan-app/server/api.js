let request = require('request'); //request是服务端发起请求的工具包
/**
 * @description 服务器部署配置信息
 * @param null
 * baseUrl：请求后台接口路径；oaBaseUrl：供node调用路径；corpid、agentid,secret：企业微信密钥信息
 * 注：OA后台GET请求为params入参方式。
 */
let baseUrl, _url, options,
       sxtBaseUrl = '' //服务器地址
module.exports = {
       appRootUrl: 'http://ts.sxtong.cn', //服务器地址
       corpid: '',
       agentid: '',
       secret: '',
       fetch: function(rq, res, method, type, uri, data, cb) {
              switch (type) {
                     case 'ym':
                            baseUrl = sxtBaseUrl
                            break;
                     default:
                            baseUrl = ''
              }
              if (method == 'GET') {
                     data = {
                            _t: Date.parse(new Date()) / 1000,
                            ...data
                     }
                     _url = baseUrl + uri + '/' + data.type
              } else {
                     _url = baseUrl + uri
              }
              options = {
                     headers: {
                            'token': rq.headers['token'],
                            'userid': rq.headers['userid'],
                            'saasid': rq.headers['saasid']
                     },
                     method: method,
                     json: true,
                     body: data,
                     url: _url
              }
              var callback = function(error, response, rt) {
                     if (!error && response.statusCode == 200) {
                            console.log('\n' + '============出参success=================' + '\n' + _url + ' .response:', JSON.stringify(rt))
                            if (typeof cb === 'function') {
                                   cb(rt)
                            } else {
                                   res.json(rt)
                            }
                     } else {
                            console.log('\n' + '============出参error=================' + '\n' + _url + ' .response:', JSON.stringify(rt))
                            if (response && response.statusCode) {
                                   res.sendStatus(response.statusCode)
                            } else {
                                   res.sendStatus(401)
                            }
                     }
              }
              console.log('\n' + '============入参==============' + '\n' + _url + ' .request:', JSON.stringify(options.body))
       }
       request(options, callback)
}