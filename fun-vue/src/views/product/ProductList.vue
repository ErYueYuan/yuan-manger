<template>
  <div class="bg3">
    <div class="fun-top-panel bg7  ">
      <span class="mess-back " @click="goBack"><div class="cont"></div></span>
      <div class="sear-bb ">
        <div class=" clearfix">
          <section>
            <form action="/">
              <van-search
                shape="round"
                v-model="searchText"
                placeholder="请输入搜索关键词"
                @search="handleSearch"
                @clear="handleClear"
              />
            </form>
          </section>
        </div>
      </div>
    </div>
    <section class="row bg7 nav-bar2 mar1">
      <div class="col-12">
        <van-tabs title-active-color="#ee0a24" @click="handleClickTag">
          <van-tab
            :scrollspy="true"
            v-for="(article, index) in tagList"
            :key="index"
            :title="article.tagName"></van-tab>
        </van-tabs>
      </div>
      <div class="col-2 pad0 c2 all-sear"><span class="t-left c-p"><b title="搜索"></b></span></div>
    </section>
    <div class="pd10 mar4-1  clearfix" :class="total===0?'':'main-container'">
      <section class="bg7 pad6 b-radius1 mar3-2">
        <section class="blk-cont2020  ">
          <ul class="cont-blk  icon-wrap ">
            <lazy-component>
              <li class="li-p2  posi2 clearfix" v-for="(item, index) in productList" :key="index"
                  @click="goProductDetail(item)">
                <div class="product2020 f-left posi2">
                  <img class="lazy-p" v-lazy="item.logoPath">
                  <span class="state"><i class="t1"></i>网销</span>
                </div>
                <div class="info-blk  ">
                  <h3 class=" mess f3 c44 ">{{item.productName}}</h3>
                  <p class="f1  mar444 mess" v-if="item.feature">{{item.feature}}</p>
                  <div class="t-left mar444">
                    <span class="type2020 ts" v-if="item.tags && item.tags.indexOf('recommend') !== -1">推荐</span>
                    <span class="type2020 hot" v-if="item.tags && item.tags.indexOf('hot') !== -1">热销</span>
                  </div>
                  <div class="f2-1 c9 sub-info clearfix">
                    <span>{{item.prem + '￥起'}}</span>
                  </div>
                </div>
                <div class="sel-b4" v-if='isChat'>
                  <label>
                    <input name="pro" type="radio" :value="item.productCode" v-model="selectProduct"
                           @change="doProduct(item)"><b></b>
                  </label>
                </div>
              </li>
            </lazy-component>
          </ul>
        </section>
        <van-empty v-show="total===0" description="暂无产品"/>
      </section>
      <div class="f2 pad888" v-if="productList.length>=total && productList.length>0">
        <div class="lzg-h-more posi2 t-center">
          <span class="c5 bg7 posi2 c222">没有更多啦</span>
        </div>
      </div>
    </div>
    <div class="posi5 pad5-8 bg7 b-shadow " v-if='isChat'>
      <button type="button" class="hx-bt3 t-center" @click="goMessBack">选好了</button>
    </div>
    <van-dialog
      v-model="dialogStatus"
      title="请选择"
      show-cancel-button
      :beforeClose="beforeClose"
    >
      <section class="bg7 pad6 b-radius1 mar3-2">
        <section class="blk-cont2020">
          <ul class="cont-blk icon-wrap">
            <lazy-component>
              <li
                class="li-p2 posi2 clearfix"
                v-for="(item, index) in versionList"
                :key="index"
              >
                <div class="f-left posi2">版本:{{ item.versionName }}</div>
                <div class="sel-b4" style="top: auto">
                  <label>
                    <input
                      name="ver"
                      type="radio"
                      :value="item.versionName"
                      @change="changeVersion(item)"
                    /><b></b>
                  </label>
                </div>
              </li>
            </lazy-component>
          </ul>
        </section>
      </section>
    </van-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Search, Tab, Tabs, Empty, Lazyload, Dialog } from 'vant'
  import { mapGetters } from 'vuex'
  import * as tool from '@/common/Tool'
  import { api_product, api_my } from '@/api/index'
  import * as scroll from '@/common/Scroll'
  import DataSource from '@/common/DataSource'

  Vue.use(Search).use(Tab).use(Tabs).use(Empty).use(Dialog).use(Lazyload, { lazyComponent: true })

  export default {
    name: 'ProductList',
    data() {
      return {
        type: this.$route.params.type,
        tagList: [{ id: '0', innerCode: '0', tagName: '全部' }],
        tagIndex: '0',
        searchText: '',
        productList: [],
        total: 0,
        isLoad: true,
        allLoaded: false,
        queryLoading: true,
        offset: 0,
        limit: 10,
        isChat: false, // 是否为消息窗口发送
        selectInfo: '', // 临时选择信息
        dialogStatus: false,
        versionList: [],
        newProcessFlag: '',
        selectVersion: '',
        selectProduct: '',
        messPath: DataSource.get('messPath', 2) || '',
        bigDataCustomerId: ''
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    beforeCreate: function () {
      document.getElementsByTagName('body')[0].className = 'bg3'
    },
    created() {
      this.bigDataCustomerId = DataSource.get('bigDataCustomerId', 2)
      DataSource.del('bigDataCustomerId', 2)
      if (this.messPath && this.messPath === 'messWindow') {
        this.isChat = true
      }
      if (this.user && this.user.userInfo && this.user.userInfo.status && this.user.userInfo.status === 2) {
        this.getProductTags()
        this.getProductList()
      } else {
        this.getVisitorProductList()
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      getProductTags() {
        const _data = {
          saasId: tool.app.saasId,
          tagType: 'filter',
          dataStructure: 'tree'
        }
        api_product.productTag(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.tagList = this.tagList.concat(data.productTagList)
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      changeVersion(selectVersion) {
        this.selectVersion = selectVersion
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
          if (this.selectVersion) {
            this.newProcessFlag = this.selectVersion.newProcessFlag
            if (!this.isChat) {
              this.goUrl(this.newProcessFlag)
            }
            done()
          } else {
            done(false)
            tool.toastMessage('请先选择版本！', 'error')
          }
        } else if (action === 'cancel') {
          this.selectVersion = ''
          this.versionList = []
          this.dialogStatus = false
          this.newProcessFlag = ''
          if (this.isChat) {
            this.selectProduct = ''
            this.selectInfo = ''
          }
          done()
        }
      },
      getProductVersion(item) {
        const data = { type: item.productCode }
        api_my.productVersion(data, { showLoadingFlag: 'N' }).then((data) => {
          if (data.status == tool.rtCode.status) {
            this.versionList = data.ciVersionProductVoExpList
            if (this.versionList.length > 1) {
              this.dialogStatus = true
            } else {
              this.newProcessFlag = this.versionList[0].newProcessFlag
              if (!this.isChat) {
                this.goUrl(this.newProcessFlag)
              }
            }
          }
        })
      },
      getAccessToken(callBack) {
        let _data = {
          'saasId': tool.app.saasId,
          'platformId': tool.app.platformId,
          'userId': this.user.userInfo.userId,
          'agentCode': this.user.userInfo.agentcode,
          'coustomerId': this.bigDataCustomerId,
          'homePath': tool.app.funUrl+'home',
          'redirectPath': tool.app.funUrl+'service',
          'audience': 'baoxian.com'
        }
        api_my.accessToken(_data, { showLoadingFlag: 'N' }).then((data) => {
          if (data.status == tool.rtCode.status) {
            callBack(data.accessToken)
          }
        })
      },
      goProductDetail(item) {
        this.selectInfo = item
        const identificationStatus = this.user.userInfo.status
        if (this.isChat) {
          this.selectProduct = item.productCode
          this.doProduct(item)
        }
        if (item.productType == '13' && identificationStatus === 2) {
          if (!this.isChat) {
            this.getAccessToken(function (accessToken) {
              window.location.href = item.staticPage + '&accessToken=' + accessToken
            })
          }
        } else {
          this.getProductVersion(item)
        }
      },
      goUrl(newProcessFlag) {
        let item = this.selectInfo
        const channelUserId = this.user.userInfo.mobile || this.user.userInfo.agentcode,
          identificationStatus = this.user.userInfo.status,
          timer = new Date().getTime(),
          backPath = tool.strToHexCharCode(window.location.href),
          curridProvince = this.user.userInfo.province || ''
        window.location.href = tool.app.lzgUrl + '#/channel/channelCode=' + tool.app.platformCode + '&channelUserId=' + channelUserId + '&productId=' + item.productCode
          + '&briskCode=' + item.briskCode + '&bigDataCustomerId=' + this.bigDataCustomerId + '&opType=1&areaCode=' + curridProvince + '&shareTime=' + timer
          + '&status=' + identificationStatus + '&otherPath=fzg&backPath=' + backPath + '&platformId=' + tool.app.platformId + '&platformCode=' + tool.app.platformCode
          + '&newProcessFlag=' + newProcessFlag
      },
      doProduct(item) {
        this.selectInfo = item
      },
      goMessBack() {
        if (this.selectInfo) {
          let item = this.selectInfo
          const channelUserId = this.user.userInfo.mobile || this.user.userInfo.agentcode,
            identificationStatus = this.user.userInfo.status,
            timer = new Date().getTime(),
            backPath = tool.strToHexCharCode(window.location.href),
            curridProvince = this.user.userInfo.province || '',
            promoteLinks = {
              title: item.productName || '',
              desc: item.feature || '产品描述~',
              imageUrl: item.logoPath || '',
              type: 1
            }
          if (item.productType == '13' && identificationStatus === 2) {
            this.getAccessToken(function (accessToken) {
              promoteLinks.url = item.staticPage + '&accessToken=' + accessToken
            })
          } else {
            promoteLinks.url = tool.app.lzgUrl + 'wx/briskInfoChannel-channelCode=' + tool.app.platformCode + '&channelUserId=' + channelUserId + '&productId=' + item.productCode
              + '&briskCode=' + item.briskCode + '&bigDataCustomerId=' + this.bigDataCustomerId + '&opType=1&areaCode=' + curridProvince + '&shareTime=' + timer
              + '&supplierCode=' + item.insurerCode + '&status=' + identificationStatus + '&otherPath=fzg&backPath=' + backPath + '&platformId=' + tool.app.platformId
              + '&platformCode=' + tool.app.platformCode + '&shareType=fzg' + '&newProcessFlag=' + this.newProcessFlag
          }
          let _uuid = tool.getUUID()
          let params = {
            'share_uuid': _uuid, //分享uuid
            'shareEvent_code': 'productShare',//事件编码
            'shareUrl': promoteLinks.url,
            'share_userId': this.user.userInfo && this.user.userInfo.userId,//分享人id
            'share_user_code': this.user.userInfo && this.user.userInfo.agentcode,
            'share_userName': this.user.userInfo && this.user.userInfo.name,//分享人名称
            'platformCode': tool.app.sourceFlag,
            'share_businessId': item.productCode,//分享内容编码
            'share_businessName': promoteLinks.title //分享内容名称
          }
          let paramsJson = tool.cloneObject(params)
          delete paramsJson.shareUrl  //有url会出错
          this.$logVisit.putShareInfo(params) // 日志插入
          promoteLinks.url = promoteLinks.url + '-' + JSON.stringify(paramsJson)
          console.log(promoteLinks)
          DataSource.set('sendShareMess', promoteLinks, 2)
          this.$router.go(-1)
        } else {
          tool.toastMessage('请先选择产品！', 'error')
        }
      },
      loadMore() {
        if (this.queryLoading) {
          return
        }
        if (!this.isLoad) {
          this.isLoad = true
          this.offset += 10
          this.getProductList()
        }
      },
      getProductList() {
        const _data = {
          saasId: tool.app.saasId,
          mainRiskFlag: '1',
          channelDeptCode: this.user.userInfo.channelcode,
          tagInnerCodes: this.tagIndex && this.tagIndex != '0' ? new Array(this.tagIndex) : [],
          params: {
            offset: this.offset,
            limit: this.limit
          },
          search: this.searchText
        }
        api_product.productList(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.isLoad = false
            this.total = data.total
            if (this.offset === 0 || this.productList.length === 0) {
              this.productList = data.productList ? data.productList : []
              if (this.productList.length < this.total) {
                this.queryLoading = false
              }
            } else {
              this.productList = this.productList.concat(data.productList)
            }
            this.allLoaded = this.productList.length >= this.total
            if (this.allLoaded) {
              this.queryLoading = true
            }
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      getVisitorProductList() {
        const _data = {
          saasId: tool.app.saasId,
          platformId: tool.app.platformId,
          params: {
            offset: this.offset,
            limit: this.limit
          },
          search: this.searchText
        }
        api_product.visitorProductList(_data).then(data => {
          if (data.status === tool.rtCode.status) {
            this.isLoad = false
            this.total = data.total
            if (this.offset === 0 || this.productList.length === 0) {
              this.productList = data.productList ? data.productList : []
              if (this.productList.length < this.total) {
                this.queryLoading = false
              }
            } else {
              this.productList = this.productList.concat(data.productList)
            }
            this.allLoaded = this.productList.length >= this.total
            if (this.allLoaded) {
              this.queryLoading = true
            }
          } else {
            tool.toastMessage(data.message, 'error')
          }
        })
      },
      handleSearch() {
        this.productList = []
        if (this.user && this.user.userInfo && this.user.userInfo.status && this.user.userInfo.status === 2) {
          this.getProductList()
        } else {
          this.getVisitorProductList()
        }
      },
      handleClear() {
        this.productList = []
        if (this.user && this.user.userInfo && this.user.userInfo.status && this.user.userInfo.status === 2) {
          this.getProductList()
        } else {
          this.getVisitorProductList()
        }
      },
      handleScroll() {
        if (scroll.getScrollTop() + scroll.getClientHeight() > (scroll.getScrollHeight() - 5)) {
          this.loadMore()
        }
      },
      handleClickTag(index, title) {
        if (this.tagIndex !== this.tagList[index].innerCode) {
          this.tagIndex = this.tagList[index].innerCode
          this.offset = 0
          this.getProductList()
        }
      },
      goBack() {
        if (this.type === 2) {
          this.$router.go(-1)
        } else {
          this.$router.push({name: 'my'})
        }
      }
    },
    beforeDestroy: function () {
      DataSource.del('messPath', 2)
      document.body.removeAttribute('class', 'bg3')
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>

</style>
