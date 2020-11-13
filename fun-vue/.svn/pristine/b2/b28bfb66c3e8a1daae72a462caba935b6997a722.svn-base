<template>
  <div>
    <div v-show="!replyPopStatus">
      <div class="fun-top-panel bg7  ">
        <div class="f2 c8 right"
             @click="$router.push({name: 'customerDetail', params: {q:params.cid, r: customerInfo.clientNewId, s:customerInfo.resultId}})"
             v-if="params.messType === 'public'">客户主页
        </div>
        <span class="mess-back " @click="goBack"><div class="cont"></div></span>
        <span class="title c3 f3 dblock2 t-center " v-if="customerInfo">{{customerInfo.nikeName || customerInfo.nickname}}</span>
      </div>
      <div class="chat-tag-box" :class="tagStatus ? 'more' : ''" v-if="!params.GCid">
        <b v-for="(tags, index) in tagsListDown" :key="'tags-' + index" v-show="!tagStatus">{{tags}}</b><b
        v-show="tagsList.length>3&&!tagStatus">...</b>
        <b v-for="(tags, index) in tagsList" :key="'tags' + index" v-show="tagStatus">{{tags}}</b>
        <div class="t-center c-p" @click="handleTagMore" v-if="tagsList.length>3"><span
          :class="tagStatus ? 'up' : 'down'"></span></div>
      </div>

      <div class="chat-tag-box c4 pad1-2" v-if="params.GCid">
        <div class="f2-1">您将发送消息给{{groupChatList.length || 0}}位客户</div>
        <div class="mess f2">
          <span class="bl" v-for="(item, index) in groupChatList" :key="'gc-'+index">{{item.nickName}}</span>
        </div>
      </div>

      <div class="chatting-wrapper" id="roll_top" :class="fileStatus || faceStatus?'open':''">
        <van-pull-refresh v-model="isLoading" :success-text="refreshText" @refresh="onRefresh">
          <div class="message-box"
               :class="item.senderFlag === '1' || item.sedType === '1' ? 'customer' : (item.senderFlag === '0' || item.sedType === '0' ? 'agent' : '')"
               v-for="(item, index) in messList" :key="index">
            <div class="time f2" v-if="item.modifydate || item.sendTime">{{item.sendTime ||
              item.modifydate.split('.')[0] | dataFormat('yyyy-MM-dd')}}<span> {{item.sendTime || item.modifydate.split('.')[0] | dataFormat('hh:mm')}}</span>
            </div>
            <div class="cont">
              <div class="img-box"><img
                :src="params.messType === 'public' ? (item.senderFlag === '1' ? item.head : user.head) : (params.messType === 'qyWx' ? (item.sedType === '1' ? fHead : user.head) : '')"/>
              </div>
              <div class="right-box">
                <div
                  v-if="(!item.sendType && !item.messageType) || (item.sendType && item.sendType !== 'news' && item.sendType !== 'image') || (item.messageType && (item.messageType !== '10003' && item.messageType !== '10006'))">
                  <h3 class="f1 c5">{{params.messType === 'public' ? item.name : (params.messType === 'qyWx' ?
                    (item.sedType === '1' ? item.nickname : user.userInfo.name) : '')}}</h3>
                  <div class="f1 c6 wrap" v-if="params.messType === 'qyWx'" v-html="item.messageContent"></div>
                  <div class="f1 c6 wrap" v-if="params.messType === 'public'" v-html="item.content"></div>
                </div>
                <div
                  v-if="(item.sendType && item.sendType === 'image') || (item.messageType && item.messageType === '10003')">
                  <section class="pic-box">
                    <img v-lazy="item.content || item.messageContent"/>
                  </section>
                </div>
                <div
                  v-if="(item.sendType && item.sendType === 'news') || (item.messageType && item.messageType === '10006' && item.messageContent.indexOf('url') !== -1)">
                  <div class="share-box bg7" @click="shareSkipClick(item)">
                    <h3 class="f2-1">{{item.sendType ? item.newsContent.title :
                      JSON.parse(item.messageContent).title}}</h3>
                    <section class="clearfix">
                      <div class="img-b f-right"><img style="object-fit: cover;"
                                                      v-lazy="item.sendType ? item.newsContent.picurl :JSON.parse(item.messageContent).imageUrl"/>
                      </div>
                      <div class="cont-b">
                        <div class="f1 c4">{{item.sendType ? item.newsContent.description
                          :JSON.parse(item.messageContent).desc}}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
<!--暂时隐藏，等中联撤回消息接口，做时间判断，2分钟内可以展示撤回图标              <div class="fun-icon icon-del" title="删除" ></div>-->
            </div>
          </div>
        </van-pull-refresh>
      </div>
      <div class="chatting-footer b-shadow">
        <div class="floor1 d-flex">
          <div class="voice" style="margin: auto;"><b title="语音"></b></div>
          <div class="chat bg7 lin-h40 mh40" id="chat" contenteditable="true"></div>
          <!--<div class="chat"><textarea placeholder="输入发送内容" v-model="sendMess"></textarea></div>-->
          <div class="other" style="margin: auto;"><b class="b1" title="表情图标" @click="chooseFace"></b><b class="b2"
                                                                                                         title="附件"
                                                                                                         @click="otherFile"></b>
          </div>
        </div>
        <div class="floor2 posi2">
          <label>短信<input type="checkbox"/><b></b></label>
          <label>邮箱<input type="checkbox"/><b></b></label>
          <label>公众号<input type="checkbox"/><b></b></label>
          <label>企业微信<input type="checkbox"/><b></b></label>
          <div class="submit-b">
            <button class="submit" @click.stop.prevent="messSubmit('')">发送</button>
          </div>
        </div>
        <div class="floor3" :class="!fileStatus?'hide':''"><!--选择分享链接默认收起-->
          <div class="f1 c5 pad1-3">选择分享链接：</div>
          <div id="chatShare" class="swiper-container ">
            <div class="swiper-wrapper">
              <div class="swiper-slide ">
                <div class="new-nav-box tools">
                  <ul class="u1 clearfix">
                    <li class="l2  f2 pad1 c-p" @click="handleSendMess('reply')">
                      <span class="c1"></span>快捷回复
                    </li>
                    <li class="l2 f2 pad1 c-p" @click="handleSendMess('material')">
                      <span class="c4"></span>素材库
                    </li>
                    <li class="l2 f2 pad1 c-p" @click="handleSendMess('repos')">
                      <span class="three"></span>知识库
                    </li>
                    <li class="l2 f2 pad1 c-p">
                      <label for="upLoadPhoto">
                        <span class="c2"></span>图片
                        <upload-file
                          ref="upLoadPhoto"
                          :upload-id="upLoadPhoto"
                          style="display:none;"
                          @iptFile="iptFileFun"
                        />
                      </label>
                    </li>
                    <li class="l2 f2 pad1 c-p" @click="sendSharePath('productList')">
                      <span class="four"></span>产品
                    </li>
                    <li class="l2 f2 pad1 c-p" @click="sendSharePath('proposalList')">
                      <span class="five"></span>计划书
                    </li>
                    <li class="l2  f2 pad1 c-p" @click="sendSharePath('articleList')">
                      <span class="one"></span>文章
                    </li>
                    <li class="l2 f2 pad1 c-p" @click="sendSharePath('store')">
                      <span class="eight"></span>微店
                    </li>
                  </ul>
                </div>
              </div>
              <div class="swiper-slide ">
                <div class="new-nav-box tools">
                  <ul class="u1 clearfix">
                    <li class="l2 f2 pad1 c-p">
                      <span class="six"></span>名片
                    </li>
                    <li class="l2 f2 pad1 c-p">
                      <span class="two"></span>风险测评
                    </li>
                    <li class="l2 f2 pad1 c-p">
                      <span class="three"></span>资产配置
                    </li>
                    <li class="l2 f2 pad1 c-p">
                      <span class="seven"></span>海报
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="floor3" v-show="faceStatus">
          <div class="faceNav" v-html="faceStr"></div>
        </div>
      </div>
    </div>
    <fast-reply v-if="replyPopStatus=='reply'" @sendFastReply="sendMessFun"></fast-reply>
    <repository v-if="replyPopStatus=='repos'" repositoryPath="repos" @sendRepository="sendMessFun"></repository>
    <material-store v-if="replyPopStatus=='material'" materialPath="material" @sendMaterial="sendMessFun"></material-store>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import * as tool from '@/common/Tool'
  import { api_mess, api_sell } from '@/api/index'
  import { UploadFile } from '@/components/index'
  import { PullRefresh, Lazyload } from 'vant'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import 'swiper/js/swiper.min.js'
  import DataSource from '@/common/DataSource'
  import FastReply from './FastReply'
  import Repository from '../my/Repository'
  import MaterialStore from '../my/MaterialStore'

  Vue.use(PullRefresh).use(Lazyload, { lazyComponent: true })

  export default {
    name: 'MessWindow',
    data() {
      return {
        pid: this.$route.params.p,
        params: {},
        messList: [],
        fileStatus: false,
        upLoadPhoto: 'upLoadPhoto',
        sendShareMess: DataSource.get('sendShareMess', 2) || {}, // 分享链接地址及分享内容
        fHead: DataSource.get('fHead', 2) || '',
        sendReplyMess: '',
        tagStatus: false,
        tagsListDown: [],
        tagsList: [], // 标签列表
        replyPopStatus: '',
        isLoading: false,
        refreshText: '',
        talkNum: DataSource.get('talkNum', 1),
        customerInfo: {},
        page: 1, // 企业微信消息分页
        total: 0,
        messListInfo:DataSource.get('messListInfo', 2) || {},//聊天列表信息
        groupChatList: [], // 微信群发好友列表
        qqfaceArr: [['[微笑]', '0'], ['[撇嘴]', '1'], ['[色]', '2'], ['[发呆]', '3'], ['[得意]', '4'], ['[流泪]', '5'], ['[害羞]', '6'], ['[闭嘴]', '7'], ['[睡]', '8'], ['[大哭]', '9'], ['[尴尬]', '10'], ['[发怒]', '11'], ['[调皮]', '12'], ['[呲牙]', '13'], ['[惊讶]', '14'], ['[难过]', '15'], ['[酷]', '16'], ['[囧]', '17'], ['[抓狂]', '18'], ['[吐]', '19'], ['[偷笑]', '20'], ['[愉快]', '21'], ['[白眼]', '22'], ['[傲慢]', '23'], ['[饥饿]', '24'], ['[困]', '25'], ['[惊恐]', '26'], ['[流汗]', '27'], ['[憨笑]', '28'], ['[悠闲]', '29'], ['[奋斗]', '30'], ['[咒骂]', '31'], ['[疑问]', '32'], ['[嘘]', '33'], ['[晕]', '34'], ['[疯了]', '35'], ['[衰]', '36'], ['[骷髅]', '37'], ['[敲打]', '38'], ['[再见]', '39'], ['[擦汗]', '40'], ['[抠鼻]', '41'], ['[鼓掌]', '42'], ['[糗大了]', '43'], ['[坏笑]', '44'], ['[左哼哼]', '45'], ['[右哼哼]', '46'], ['[哈欠]', '47'], ['[鄙视]', '48'], ['[委屈]', '49'], ['[快哭了]', '50'], ['[阴险]', '51'], ['[亲亲]', '52'], ['[吓]', '53'], ['[可怜]', '54'], ['[菜刀]', '55'], ['[西瓜]', '56'], ['[啤酒]', '57'], ['[篮球]', '58'], ['[乒乓]', '59'], ['[咖啡]', '60'], ['[饭]', '61'], ['[猪头]', '62'], ['[玫瑰]', '63'], ['[凋谢]', '64'], ['[嘴唇]', '65'], ['[爱心]', '66'], ['[心碎]', '67'], ['[蛋糕]', '68'], ['[闪电]', '69'], ['[炸弹]', '70'], ['[刀]', '71'], ['[足球]', '72'], ['[瓢虫]', '73'], ['[便便]', '74'], ['[月亮]', '75'], ['[太阳]', '76'], ['[礼物]', '77'], ['[拥抱]', '78'], ['[强]', '79'], ['[弱]', '80'], ['[握手]', '81'], ['[胜利]', '82'], ['[抱拳]', '83'], ['[勾引]', '84'], ['[拳头]', '85'], ['[差劲]', '86'], ['[爱你]', '87'], ['[NO]', '88'], ['[OK]', '89'], ['[爱情]', '90'], ['[飞吻]', '91'], ['[跳跳]', '92'], ['[发抖]', '93'], ['[怄火]', '94'], ['[转圈]', '95'], ['[磕头]', '96'], ['[回头]', '97'], ['[跳绳]', '98'], ['[投降]', '99'], ['[激动]', '100'], ['[乱舞]', '101'], ['[献吻]', '102'], ['[左太极]', '103'], ['[右太极]', '104']],
        faceStr: '',
        faceStatus: false, // 表情
        skip: 0, // 群发确保跳转一次
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    components: {
      'upload-file': UploadFile,
      'fast-reply': FastReply,
      'repository': Repository,
      'material-store': MaterialStore
    },
    beforeCreate: function () {
      document.getElementsByTagName('body')[0].className = 'bg3'
    },
    created() {
      window.createDialogue = this.createDialogue
      this._params = this.pid.split('&')
      if (this._params && this._params.length > 0) {
        for (let e of this._params) {
          this.params[e.split('=')[0]] = e.split('=')[1]
        }
      }
      this.sendMessStatus() // 查询是否是要发送状态
      if (this.params.messType && this.params.messType === 'public') {
        this.getMessWindowList()
        if (this.talkNum != 0) {
          this.customerTalkEdit() // 客户红点更新
        }
        this.queryBasicIntroduction() // 客户详情
      } else if (this.params.messType && this.params.messType === 'qyWx') {
        if (this.params.GCid && this.params.GCid == '1') { // 群发
          this.groupChatList = DataSource.get('groupChat', 2) || []
          this.customerInfo.nickname = '群发'
        } else {
          // if (!this.sendShareMess || (!!this.sendShareMess && !this.sendShareMess.type)) {
            this.getWxChatMessWindowList()
          // }
          if (this.params.fid) {
            this.getWxChatFriendInfo()
          } else if (this.params.gid) {
            this.customerInfo.nickname = this.messListInfo.nickname || '群聊'
          }
        }
      }
      this.$options.sockets.onmessage = (data) => this.messageReceived(data)
    },
    mounted() {
      this.integrateFace() // 表情初始化
    },
    methods: {
      initSwiper() {
        this.$nextTick(() => {
          const swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
      integrateFace() { // 表情初始化
        for (let item of this.qqfaceArr) {
          this.faceStr += `<div class='hdj qqface qqface${item[1]}' data-id='${item[1]}' onclick='createDialogue(${item[1]})'></div>`
        }
      },
      chooseFace() { // 表情弹窗层
        this.faceStatus = !this.faceStatus
        this.fileStatus = false
      },
      createDialogue(it) { // 选择表情时输入框添加表情
        let dialogue = document.getElementById('chat')
        let img = document.createElement('img')
        img.setAttribute('class', 'mh25')
        img.setAttribute('data-id', it)
        img.setAttribute('src', 'https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/modules/common/emoji/images/smiley/smiley_' + it + '4273fb.png')
        dialogue.appendChild(img)
      },
      customerTalkEdit() {
        const _data = {
          clientId: this.params.cid,
          saasId: tool.app.saasId,
          appId: this.params.aid
        }
        api_mess.customerTalkEdit(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.getUserMessNumber()
          }
        })
      },
      getUserMessNumber() {
        const _data = {
          saasId: tool.app.saasId,
          userId: this.user.userInfo.userId || ''
        }
        api_mess.readTimeTalkNum(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            const userMess = {
              messConversation: data.talkNum
            }
            DataSource.set('userMess', userMess, 1)
            tool.setUserMess(userMess)
          }
        })
      },
      // 公众号客户基本信息
      queryBasicIntroduction() {
        const _data = {
          saasId: tool.app.saasId,
          clientId: this.params.cid
        }
        api_sell.queryBasicIntroduction(_data).then(data => {
          if (data.status == tool.rtCode.status) {
            this.customerInfo = data
            this.getUserTags()
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      sendMessStatus() {
        let sendMess = {}
        if (this.sendShareMess) {
          sendMess = this.sendShareMess
        }
        if (sendMess && sendMess.url) {
          DataSource.del('sendShareMess', 2)
          this.messSubmit(sendMess)
        }
      },
      getUserTags() {
        const _data = {
          resultId: this.customerInfo.resultId,
          saasId: tool.app.saasId
        }
        api_sell.queryCustomerPortrait(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.tagsList = data.tagsName || []
            if (this.tagsList && this.tagsList.length > 3) {
              this.tagsListDown = this.tagsList.slice(0, 3)
            } else {
              this.tagsListDown = this.tagsList
            }
          }
        })
      },
      getMessWindowList() {
        const _data = {
          saasId: tool.app.saasId,
          clientId: this.params.cid,
          appId: this.params.aid
        }
        api_mess.getOneTalkList(_data, { showLoadingFlag: 'N' }).then(data => {
          if (data.status === tool.rtCode.status) {
            for (let it of data.funRealTimeMessageDTOList) {
              // if (it.messageType === '10001') {
              for (let i in this.qqfaceArr) {
                let face = this.qqfaceArr[i]
                let ff = '\\' + this.qqfaceArr[i][0]
                it.content = it.content.replace(new RegExp(ff, 'g'), `<img class="mh25" src="https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/modules/common/emoji/images/smiley/smiley_` + face[1] + `4273fb.png"/>`)
              }
              // }
            }
            this.messList = data.funRealTimeMessageDTOList
            this.handleScroll()
          }
        })
      },
      messSubmit(mess) { // mess 一定要用对象格式
        if (!mess) {
          let dialogue = document.getElementById('chat').innerHTML
          let img = document.getElementById('chat').getElementsByTagName('img')

          for (let i = 0; i < img.length; i++) {
            for (let j in this.qqfaceArr) {
              if (img[i].attributes['data-id'].nodeValue == this.qqfaceArr[j][1]) {
                dialogue = dialogue.replace(img[i].outerHTML.toString(), this.qqfaceArr[j][0])
              }
            }
          }
          mess = dialogue
        }
        if (mess) {
          if (this.params.messType === 'public') {
            const _data = {
              touser: this.params.oid, // 关注用户的openid
              authAppId: this.params.aid, // 公众号appId
              createTime: new Date().getTime(), // 发送时间
              userId:this.user.userInfo.userId,
              mainId: this.messListInfo.mainId,
              msgtype: mess.type && mess.type === 4 ? 'image' : (mess.type && mess.type !== 4 ? 'news' : 'text'), // 消息类型
            }
            // 分享链接地址来源 1-产品,2-计划书，3-文章,4-图片,5-微店
            if (mess.type && mess.type === 4) {
              _data.imageUrl = mess.url
            } else if (mess.type && (mess.type === 1 || mess.type === 2 || mess.type === 3 || mess.type === 5)) {
              _data.news = {
                articles: [{
                  title: mess.title,
                  description: mess.desc,
                  url: mess.url,
                  picurl: mess.imageUrl
                }]
              }
            } else {
              _data.text = {
                content: mess.url || mess
              }
            }
            api_mess.readTimeWindow(_data).then(data => {
              if (data.status === tool.rtCode.status) {
                this.sendSuccess()
              } else {
                tool.toastMessage(data.message, 'error')
              }
            })
          } else {
            if (this.params.GCid && this.params.GCid == '1') {
              for (let it of this.groupChatList) {
                this.customerInfo.wechatId = it.weChatId
                this.messSubmitWeChat(mess)
              }
            } else {
              this.messSubmitWeChat(mess)
            }

          }
        } else {
          tool.toastMessage('发送内容不能为空，请重新输入', 'warn')
        }
      },
      messSubmitWeChat(mess) {
        const _data = {
          operationWechatId: this.params.wid, // 运营号ID
          operatorId: this.user.operatorManageInfo.id, // 运营者ID
          messageType: mess.type && mess.type === 4 ? '10003' : (mess.type && mess.type !== 4 ? '10006' : '10001'), // 消息类型
          wechatId: this.params.wctId || this.customerInfo.wechatId, // 好友微信号id
          chatType: this.params.GCid || this.params.fid ? '0' : (this.params.gid ? '1' : ''), // 聊天类型：0-与好友聊天；1-与群组聊天
        }
        // 分享链接地址来源 1-产品,2-计划书，3-文章,4-图片,5-微店
        if (mess.type && (mess.type === 1 || mess.type === 2 || mess.type === 3 || mess.type === 5)) {
          let messageContent = {
            url: mess.url,
            title: mess.title,
            desc: mess.desc,
            imageUrl: mess.imageUrl
          }
          _data.messageContent = JSON.stringify(messageContent)
        } else if (mess.type && mess.type === 4) {
          _data.messageContent = mess.url
        } else {
          _data.messageContent = mess.url || mess
        }
        if (this.params.fid) {
          _data.friendId = this.params.fid
        } else if (this.params.gid) {
          _data.platformGid = this.params.gid
        }
        api_mess.chatMessageAdd(_data).then(res => {
          if (res.code == '200') {
            if (this.params.GCid && this.params.GCid == '1') {
              if (this.skip === 0) {
                this.skip += 1
                this.$router.back()
              }
            } else {
              this.sendSuccess()
            }
          } else {
            tool.toastMessage(res.msg, 'error')
          }
        })
      },
      sendSuccess() {
        document.getElementById('chat').innerHTML = ''
        if (this.params.messType === 'public') {
          this.getMessWindowList()
        } else if (this.params.messType === 'qyWx') {
          this.getWxChatMessWindowList('send')
        }
        if (this.sendShareMess) {
          DataSource.del('sendShareMess', 2)
          this.sendShareMess = ''
        }
        tool.toastMessage('发送成功')
      },
      handleTagMore() {
        if (this.tagsList.length > 3) {
          this.tagStatus = !this.tagStatus
        }
      },
      otherFile() {
        this.fileStatus = !this.fileStatus
        this.faceStatus = false
        this.initSwiper()
        this.handleScroll()
      },
      handleSendMess(type) {
        this.fileStatus = false
        this.replyPopStatus = type
      },
      sendSharePath(path) {
        switch (path) {
          case 'productList':
            DataSource.set('messPath', 'messWindow', 2)
            this.$router.push({ name: path, params: {type: 2} })
            break
          case 'store':
            let _uuid = tool.getUUID()
            let params = {
              'share_uuid': _uuid, //分享uuid
              'shareEvent_code': 'storeShare',//事件编码
              'shareUrl': tool.app.channelUrl + 'wx/shop-type=home&userId=' + this.user.userInfo.userId,
              'share_userId': this.user.userInfo && this.user.userInfo.userId,//分享人id
              'share_user_code': this.user.userInfo && this.user.userInfo.agentcode,
              'share_userName': this.user.userInfo && this.user.userInfo.name,//分享人名称
              'platformCode': tool.app.sourceFlag,
              'share_businessId': this.user.userInfo.userId,//分享内容编码
              'share_businessName': this.user.userInfo.name + '的微店' //分享内容名称
            }
            let paramsJson = tool.cloneObject(params)
            delete paramsJson.shareUrl  //有url会出错
            this.$logVisit.putShareInfo(params) // 日志插入
            let mess = {
              url: tool.app.channelUrl + 'wx/shop-type=home&userId=' + this.user.userInfo.userId + '-' + JSON.stringify(paramsJson),
              title: this.user.userInfo.name + '的微店',
              desc: '适合自己的产品才是最好的产品，春风十里，不如你进店逛逛。',
              imageUrl: 'https://upload-10051630.cos.ap-shanghai.myqcloud.com/funzg/store.png',
              type: 5
            }
            this.messSubmit(mess)
            break
          default:
            this.$router.push({ path: '/' + path + '/2' })
        }
      },
      handleScroll() { // 进来第一次定位
        this.$nextTick(() => {
          let messWin = document.getElementsByClassName('chatting-wrapper')[0],
            messBox = document.getElementsByClassName('message-box'),
            messHeight = 0
          for (let it of messBox) {
            messHeight += it.offsetHeight
          }
          messHeight = messHeight > 100 ? messHeight - 100 : 0
          messWin.scrollTop = messHeight
        })
      },
      handleRefreshScroll(num) { // 下拉定位
        this.$nextTick(() => {
          let messWin = document.getElementsByClassName('chatting-wrapper')[0],
            messBox = document.getElementsByClassName('message-box'),
            messHeight = 0
          for (let ind in messBox) {
            if (ind >= num) { // num 是此次更新多少条
              break
            }
            messHeight += messBox[ind].offsetHeight
          }
          messWin.scrollTop = messHeight
        })
      },
      onRefresh() { // 上拉加载
        if (this.messList.length < this.total) {
          if (this.params.messType && this.params.messType === 'public') { // 公众号
            const _data = {
              saasId: tool.app.saasId,
              userId: this.params.cid,
              appId: this.params.aid
            }
            api_mess.getOneTalkList(_data).then(data => {
              if (data.status === tool.rtCode.status) {
                this.messList = this.messList.concat(data.funRealTimeMessageDTOList)
                this.handleRefreshScroll()
                this.refreshText = '刷新成功'
                this.isLoading = false
              }
            })
          } else if (this.params.messType && this.params.messType === 'qyWx') { // 企业微信
            this.page += 1
            this.getWxChatMessWindowList()
          }
        } else {
          this.refreshText = '刷新已到底'
          this.isLoading = false
        }
      },
      goBack() {
        DataSource.del('talkNum', 1)
        this.$router.back()
      },
      iptFileFun(params) {
        if (params && params.url) {
          let mess = {
            url: params.url,
            type: 4
          }
          this.messSubmit(mess)
        }
      },
      sendMessFun(params) {
        this.replyPopStatus = ''
        if (params && params.content) {
          let nickname = this.customerInfo.nikeName || this.customerInfo.nickname || ''
          let sendMess = params.content.replace(/<span class="c8">客户昵称<\/span>/g, nickname).replace(/<span>/g, '').replace(/<\/span>/g, '')
          document.getElementById('chat').innerHTML = sendMess
          this.messSubmit()
        }
      },

      /****** 企业微信好友函数 ******/
      //获取企业微信消息
      getWxChatMessWindowList(type) {
        let _data = {
          page: this.page,
          size: 20,
          query: {
            operationWechatId: this.params.wid
          }
        }
        if (this.params.fid) {
          _data.query.friendId = this.params.fid
          api_mess.friendChatMessageInfo(_data, { showLoadingFlag: 'N' }).then(res => {
            if (res.code == '200') {
              if (type && type === 'send') {
                for (let it of res.rows) {
                  if (it.messageType === '10001') {
                    for (let i in this.qqfaceArr) {
                      let face = this.qqfaceArr[i]
                      let ff = '\\' + this.qqfaceArr[i][0]
                      it.messageContent = it.messageContent.replace(new RegExp(ff, 'g'), `<img class="mh25" src="https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/modules/common/emoji/images/smiley/smiley_` + face[1] + `4273fb.png"/>`)
                    }
                  }
                }
                this.messList = res.rows.reverse()
                this.total = res.total
                this.handleScroll()
              } else {
                this.isLoading = false
                this.organizeMessageList(res)
              }
            } else {
              tool.toastMessage(res.msg, 'error')
            }
          })
        } else if (this.params.gid) {
          _data.query.platformGid = this.params.gid
          api_mess.groupMessageInfo(_data).then(res => {
            if (res.code == '200') {
              if (type && type === 'send') {
                this.messList = res.rows.reverse()
                this.total = res.total
                this.handleScroll()
              } else {
                this.isLoading = false
                this.organizeMessageList(res)
              }
            } else {
              tool.toastMessage(res.msg, 'error')
            }
          })
        }
      },
      organizeMessageList(res) {
        for (let it of res.rows) {
          if (it.messageType === '10001') {
            for (let i in this.qqfaceArr) {
              let face = this.qqfaceArr[i]
              let ff = '\\' + this.qqfaceArr[i][0]
              it.messageContent = it.messageContent.replace(new RegExp(ff, 'g'), `<img class="mh25" src="https://res.wx.qq.com/mpres/zh_CN/htmledition/pages/modules/common/emoji/images/smiley/smiley_` + face[1] + `4273fb.png"/>`)
            }
          }
        }
        if (this.total === 0 || this.messList.length === 0) {
          this.messList = res.rows.reverse()
          this.handleScroll()
        } else {
          let num = res.rows.length
          this.messList = res.rows.reverse().concat(this.messList)
          this.handleRefreshScroll(num)
        }
        this.total = res.total
      },
      // 查企业微信好友信息
      getWxChatFriendInfo() {
        api_mess.getFriendInfo({ type: this.params.fid || this.params.gid }).then(res => {
          if (res.code == '200') {
            this.customerInfo = res.data
          } else {
            tool.toastMessage(res.msg, 'error')
          }
        })
      },
      shareSkipClick(mes) {
        if (mes.messageContent && this.params.messType === 'qyWx') {
          window.location.href = JSON.parse(mes.messageContent).url
        } else if (mes.newsContent && mes.newsContent.url && this.params.messType === 'public') {
          window.location.href = mes.newsContent.url
        }
      },
      messageReceived: function (raw_message) {
        let res = JSON.parse(raw_message.data)
        console.log(res)
        if (res && res.data && res.socketType === 'pushMessage') {
          this.getWxChatMessWindowList('send')
        } else if (res && res.data && res.data.messType === 'public') {
          this.getMessWindowList()
        }
      },
    },
    beforeDestroy: function () {
      this.customerTalkEdit()
      document.body.removeAttribute('class', 'bg3')
    },
  }
</script>

<style scoped>
  .wrap {
    word-wrap: break-word;
    word-break: break-all;
  }

  .van-pull-refresh {
    min-height: 100%;
  }

  .mh40 {
    -webkit-user-select: auto;
    line-height: 22px;
    padding: 7px 0;
  }

  .bl {
    display: inline-block;
    padding: 0 5px;
    width: auto;
    height: 18px;
    line-height: 18px;
    border: none;
  }
</style>
<style>
  .mh25 {
    max-height: 25px;
    max-width: 25px;
    display: inline-block;
  }
</style>
