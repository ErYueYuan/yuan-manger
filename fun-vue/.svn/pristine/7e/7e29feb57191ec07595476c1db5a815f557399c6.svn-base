'use strict'
import * as tool from '@/common/Tool'

let logUrl = tool.app.logUrl
let _fhs = _fhs || []
let fhs = document.createElement('script')
fhs.src = logUrl + '?version=1.0.1&funzg'
fhs.id = 'script_id'
let s = document.getElementsByTagName('script')[0]
s.parentNode.insertBefore(fhs, s)


const logVisit = {
  add(en, params) {  //事件名称,传递参数
    try {//行为日志
      if (!params) {
        if (typeof window._FanhWebVisit != 'undefined' && typeof window._FanhWebVisit.putEventInfo != 'undefined' && typeof window._FanhWebVisit.putEventInfo == 'function') {
          window._FanhWebVisit.putEventInfo(en, 'button')
        }
      } else {
        if (typeof window._FanhWebVisit != 'undefined' && typeof window._FanhWebVisit.putUserInfo != 'undefined' && typeof window._FanhWebVisit.putUserInfo == 'function') {
          window._FanhWebVisit.putUserInfo(params)
        }
      }
    } catch (e) {

    }
  },
  putShareInfo: function (params) {//传递参数
    try {//行为日志
      if (typeof window._FanhWebVisit != 'undefined' && typeof window._FanhWebVisit.putShareInfo != 'undefined' && typeof window._FanhWebVisit.putShareInfo == 'function') {
        window._FanhWebVisit.putShareInfo(params)
      }
    } catch (e) {

    }
  },
  putShareReadInfo: function (params) {//传递参数
    try {//行为日志
      if (typeof window._FanhWebVisit != 'undefined' && typeof window._FanhWebVisit.putShareReadInfo != 'undefined' && typeof window._FanhWebVisit.putShareReadInfo == 'function') {
        window._FanhWebVisit.putShareReadInfo(params)
      }
    } catch (e) {

    }
  },
}

export default logVisit
