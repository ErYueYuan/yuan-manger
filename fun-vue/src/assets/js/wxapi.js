'use strict'

import wx from 'weixin-js-sdk'
import { api_user } from '@/api/index'
import * as tool from '@/common/Tool'
import DataSource from '@/common/DataSource'


const wxApi = {
  wxShare(option) {
    if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
      this.url = DataSource.get('firUrl', 1)
    } else {
      this.url = window.location.href
    }
    let _data = {
      url: this.url,
      saasId: tool.app.saasId,
      publicUserId: tool.app.publicUserId
    }
    let data = {}
    api_user.jsapiticket(_data).then(res => {
      if (res.status == tool.rtCode.status) {
        data.appId = tool.app.appId
        data.timestamp = res.timestamp
        data.nonceStr = res.noncestr
        data.signature = res.signature
        this.wxRegister(data, option)
      }
    })
  },
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  wxRegister(data, option) { //data是微信配置信息，option是分享的配置内容
    wx.config({
      debug: false, // 开启调试模式
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名
      jsApiList: [
        'checkJsApi',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'showMenuItems',
      ] // 必填，需要使用的JS接口列表
    })
    wx.ready(function () {
      wx.checkJsApi({
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'showMenuItems'],
        success: function (res) {
          wx.showMenuItems({
            menuList: [
              'menuItem:share:appMessage',
              'menuItem:share:timeline'
            ] // 要显示的菜单项，所有menu项见附录3
          })
        }
      })
      wx.updateAppMessageShareData({
        title: option.title, // 分享标题
        desc: option.desc, // 分享描述
        link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl, // 分享图标
        success: function () {
          // 设置成功
        }
      })
      wx.updateTimelineShareData({
        title: option.title, // 分享标题
        link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl, // 分享图标
        desc: option.desc, // 分享描述
        success: function () {
          // 设置成功
        }
      })
    })
  },
}

export default wxApi
