/**
 * Created by dai on 2016/8/26.
 * validator模块提供正则校验规则
 * @module validator
 */
'use strict'
import * as tool from '@/common/Tool'

let Vd = {}

function startLoading(msg) {
  tool.toastMessage(msg, 'error')
}

function isObject(value) {
  // http://jsperf.com/isobject4
  return value !== null && typeof value === 'object'
}

Vd.required = function (value, msg) {// 非空
  var result = false
  if (!!value || value === 0) {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        result = true
      } else {
        for (var ind = 0; ind < value.length; ind++) {
          if (value[ind]) {
            result = true
          }
        }
      }
    } else if (isObject(value)) {
      for (var key in value) {
        if (value.hasOwnProperty(key) && !!value[key]) {
          result = true
        }
      }
    } else {
      result = true
    }
  }
  if (!result) {
    startLoading(msg)
  }
  return result
}
Vd.mobile = function (value, msg) {// 手机
  var regex = /^1\d{10}$/
  if (regex.test(value)) {
    return true
  }
  startLoading(msg)
  return false
}
Vd.password = function (value, msg) {// 密码
  var regex = /^[a-zA-Z0-9!@`~#$%^&*()_+-=\|;':",.<>?]{6,18}$/
  if (regex.test(value)) {
    return true
  }
  startLoading(msg)
  return false
}
Vd.mobileCode = function (value, msg) {//6位验证码
  var regex = /^\d{6}$/
  if (regex.test(value)) {
    return true
  }
  startLoading(msg)
  return false
}
Vd.number = function (value, msg) {// 手机,工号(暂时最多9位)
  if (value.length == 11) {
    var regex = /^1\d{10}$/
    if (regex.test(value)) {
      return true
    }
    startLoading(msg)
    return false
  } else if (value.length > 0 && value.length <= 9) {
    var regex = /^\d{9}$/
    if (regex.test(value)) {
      return true
    }
    startLoading(msg)
    return false
  } else if (value.length > 9 && value.length < 11) {
    var regex = /^1\d{10}$/
    if (regex.test(value)) {
      return true
    }
    startLoading(msg)
    return false
  }
}
Vd.name = function (value, msg) {//昵称
  var regex = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  if (regex.test(value)) {
    return true
  }
  startLoading(msg)
  return false
}
Vd.idcard = function (value, msg) {// 身份证
  var regex = /^(\d{6})(18|19|20)(\d{2})([01]\d)([0123]\d)(\d{3})(\d|X|x)$/
  if (regex.test(value)) {
    return true
  }
  startLoading(msg)
  return false
},
  Vd.isWeiXin = function () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }
Vd.isQQ = function () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/QQ\//i) == 'qq/') {
    return true
  } else {
    return false
  }
}
Vd.isAndroid = function () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/android/)) {
    return true
  } else {
    return false
  }
}
Vd.isApp = function () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/iphone|ipad|ipod|android/)) {
    return true
  } else {
    return false
  }
}
Vd.isIOS = function () {
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/iphone|ipad|ipod/)) {
    return true
  } else {
    return false
  }
}
Vd.equals = function (value, baseVal, msg) {
  if (value === baseVal) {
    return true
  }
  startLoading(msg)
  return false
}
export default Vd
