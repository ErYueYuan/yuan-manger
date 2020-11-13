<template>
  <div>
    <section class="mar6 b-radius1 b-sh1 pad5">
      <section class=" fileinput-reg">
        <div>
          <img class="obj-fit" :src="upload.urlId1 ? upload.urlId1 : require('@/assets/img/my/space.png')"/>
        </div>
        <b class="b1" title="上传资料" v-if="!upload.urlId1"></b>
        <!--upload-ocr 1-身份证 2-驾驶证 3-银行卡-->
        <upload-file ref="upLoadFile"
                     upload-ocr="1"
                     :upload-id="uploadId.id1"
                     @iptFile="iptFileFun"
                     @ocrFun="ocrFun"/>
      </section>
      <div class="f1 t-center c2 o-p pad5">（上传身份证图片后自动识别姓名和身份证号）</div>
      <section>
        <dl class="per-box bg7 border-b1">
          <dt class="c6 f3-1">姓名</dt>
          <dd class="t-left f3-1 c5 ">
            <input type="text" class="ca-input form-control h44 t-left" placeholder="请先上传身份证" v-model="user.name">
          </dd>
        </dl>
        <dl class="per-box bg7">
          <dt class="c6 f3-1">身份证号</dt>
          <dd class="t-left f3-1 c5 ">
            <input type="text" class="ca-input form-control h44 t-left" placeholder="请先上传身份证" v-model="user.idNo">
          </dd>
        </dl>
      </section>
    </section>
    <section class="mar3 bg7">
      <div class="row  pad5-2">
        <div class="col-6 pad1-1">
          <section class=" fileinput-reg twins">
            <div>
              <img class="obj-fit" :src="upload.urlId2 ? upload.urlId2 : require('@/assets/img/my/space.png')"/>
            </div>
            <b class="b1" title="上传资料" v-if="!upload.urlId2"></b>
            <upload-file ref="upLoadFile"
                         :upload-id="uploadId.id2"
                         @iptFile="iptFileFun"/>
          </section>
        </div>
        <div class="col-6 pad1-1">
          <section class=" fileinput-reg twins">
            <div>
              <img class="obj-fit" :src="upload.urlId3 ? upload.urlId3 : require('@/assets/img/my/space.png')"/>
            </div>
            <b class="b2" title="上传资料" v-if="!upload.urlId3"></b>
            <upload-file ref="upLoadFile"
                         :upload-id="uploadId.id3"
                         @iptFile="iptFileFun"/>
          </section>
        </div>
      </div>
    </section>
    <div>{{time.split('.')[0] | dataFormat('yyyy-MM-dd hh:mm')}}</div>
    <div>
      <p v-if="isConnected">We're connected to the server!</p>
      <van-button type="primary" @click="start">连接websocket</van-button>
      <van-button type="info" @click="send">发送消息</van-button>
      <van-button type="default" @click="stop()">断开websocket</van-button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Button } from 'vant'
  import { UploadFile } from '@/components/index'

  Vue.use(Button)

  export default {
    name: 'Demo',
    data() {
      return {
        isConnected: false,
        uploadId: {
          id1: 'uploadId1',
          id2: 'uploadId2',
          id3: 'uploadId3'
        },
        upload: {
          urlId1: '',
          urlId2: '',
          urlId3: ''
        },
        user: {
          name: '',
          idNo: '',
        },
        time: '2020-10-22 15:06:18.0'
      }
    },
    created() {
      this.$options.sockets.onmessage = (data) => this.messageReceived(data)
    },
    components: {
      'upload-file': UploadFile,
    },
    methods: {
      messageReceived: function (raw_message) {
        console.log(raw_message)
        this.$forceUpdate()
      },
      start() {
        this.$socket.sendObj({ command: 'start' })
      },
      stop() {
        this.$socket.sendObj({ command: 'stop' })
      },
      send() {
        this.$socket.send('呵呵呵呵')
        this.$socket.sendObj({ awesome: 'data' })
      },
      uploadFileFun(params) {
        if (params && params.url) {
          if (params.id == 'uploadId1') {
            this.upload.urlId1 = params.url
            if (params.ocrData) {
              this.user.name = params.ocrData.name
              this.user.idNo = params.ocrData.cardno
            }
          } else if (params.id == 'uploadId2') {
            this.upload.urlId2 = params.url
          } else if (params.id == 'uploadId3') {
            this.upload.urlId3 = params.url
          }
        }
      },
      iptFileFun(params) {
        if (params && params.url) {
          switch (params.id) {
            case 'uploadId1':
              this.upload.urlId1 = params.url
              break
            case 'uploadId2':
              this.upload.urlId2 = params.url
              break
            case 'uploadId3':
              this.upload.urlId3 = params.url
              break
          }
        }
      },
      ocrFun(params) {
        if (params && params.ocrData) {
          this.user.name = params.ocrData.name
          this.user.idNo = params.ocrData.cardno
        }
      }
    }
  }
</script>

<style scoped>

</style>
