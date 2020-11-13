/*
* 工具类*/
import store from '../store/index'
import Vd from '../common/Validator'
import { Toast } from 'vant'

/**
 * @desc 基础信息
 */
const app = {
  saasId: 'ff5a67337b6611e89feafa163eb3e537',//服务商编号
  appId: 'wxfc31d19d147b8152', // plus公众号
  publicUserId: 'ff5a67337b6611e89feafa163eb3e537',
  sourceFlag: 'funzg',
  platformCode: '12',
  platformId: '2724341dfdc5463cbf167f1195da6e3e',
  lzgUrl: 'http://ts.sxtong.cn/lzg/', //懒掌柜
  channelUrl: 'http://ts.sxtong.cn/chmobile/', //泛华云服
  funUrl: 'http://devfh.funzg.net/funzg/', //fun掌柜
  logUrl: 'https://emr-1251973116.cos.ap-shanghai.myqcloud.com/logRecordJsScript/webLogRecord_dev.js',
  webSocketUrl: 'wss://test.zhonglianhuanxin.com/scrm-im-api/webSocket/'
}

/**
 * @desc 原生appID
 */
const vxplat = {
  appId: 'wx26cdc2c8e3a6ed67',
}

/**
 * @desc 全局判断信息
 */
const globalData = {
  isWeiXin: Vd.isWeiXin(),
  isApp: (!Vd.isWeiXin() && Vd.isApp()),
  isAndroid: (!Vd.isWeiXin() && Vd.isAndroid()),
  isWxAndroid: (Vd.isWeiXin() && Vd.isAndroid()),
  isIOS: (!Vd.isWeiXin() && Vd.isIOS()),
  isWxIOS: (Vd.isWeiXin() && Vd.isIOS()),
}

/**
 * @desc 金融云图片上传路径已经appid配置
 */
const cos = {
  bucketName: 'uploaduat-10051630',//生产为：upload
  region: 'ap-shanghai',
  appid: '10051630',
  folder: '/upload/common/funzg/',
  city: 'sh',
  city5: 'ap-shanghai',
}

/**
 * @desc 接口返回状态码
 */
const rtCode = {
  status: 'SUCCESS'
}

/**
 * @desc 接口入参分页参数配置
 */
const pagination = {
  pagesize: 10,
  pageoffset: 0
}

export { app, vxplat, rtCode, pagination, globalData, cos }


/**
 * @desc 数组对象排序
 */
export function sortBy(prop, rev) {
  //第二个参数没有传递 默认升序排列
  if (rev == undefined) {
    rev = 1
  } else {
    rev = (rev) ? 1 : -1
  }
  return function (a, b) {
    a = a[prop]
    b = b[prop]
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
      a = Number(a)
      b = Number(b)
    }
    if (a < b) {
      return rev * -1
    }
    if (a > b) {
      return rev * 1
    }
    return 0
  }
}

/**
 * @desc 获取UUID随机编码
 */
export function getUUID() {
  let s = []
  let hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '^'

  let uuid = s.join('')
  return uuid
}

/**
 * @desc 判断入参是否是字符串，如果是则转成json对象，否则，返回这个入参
 * 主要用于接口返回参数的类型转换
 */
export function stringToJson(val) {
  if (typeof val === 'string') {
    return JSON.parse(val)
  } else {
    return val
  }
}

/**
 * 深度克隆对象、数组
 * @param obj 被克隆的对象
 * @return 克隆后的对象
 */
export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @desc 登录保存全局缓存
 */
export function setUser(msg) {
  store.dispatch('setUser', msg)
}

/**
 * @desc 用户迁入状态缓存
 */
export function setUserSign(msg) {
  store.dispatch('setUserSign', msg)
}

/**
 * @desc 会话消息
 */
export function setUserMess(msg) {
  store.dispatch('setUserMess', msg)
}

/**
 * @desc 头像
 */
export function setUserHead(msg) {
  store.dispatch('setUserHead', msg)
}

/**
 * @desc websocket
 */
export function setSocketMsg(msg) {
  store.dispatch('socketMsg', msg)
}

/**
 * @desc 全局弹框提示
 */

export function toastMessage(message, type) {
  Toast.allowMultiple()
  Toast.setDefaultOptions({ duration: 3000 })
  switch (type) {
    case 'success':
      Toast({ message: message, position: 'top' })
      break
    case 'error':
      Toast({ message: message, className: 'toast-error', position: 'top' })
      break
    case 'warn':
      Toast({ message: message, className: 'toast-warn', position: 'top' })
      break
    default:
      Toast({ message: message, position: 'top' })
      break
  }
}

/**
 * @desc 字符串转16进制
 */

export function strToHexCharCode(str) {
  if(str === '')
    return ''
  let hexCharCode = []
  hexCharCode.push('0x')
  for(var i = 0; i < str.length; i++) {
    hexCharCode.push((str.charCodeAt(i)).toString(16))
  }
  return hexCharCode.join('')
}

/**
 * @desc 16进制转字符串
 */

export function hexCharCodeToStr(hexCharCodeStr) {
  let trimedStr = hexCharCodeStr.trim(),
    rawStr = trimedStr.substr(0,2).toLowerCase() === '0x'?trimedStr.substr(2):trimedStr,
    len = rawStr.length,
    curCharCode,
    resultStr = []
  if(len % 2 !== 0) {
    return ''
  }
  for(var i = 0; i < len;i = i + 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16) // ASCII Code Value
    resultStr.push(String.fromCharCode(curCharCode))
  }
  return resultStr.join('')
}
