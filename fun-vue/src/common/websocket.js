import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import store from '@/store'
import DataSource from '@/common/DataSource'
import * as tool from '@/common/Tool'


let accountId = DataSource.get('operatorManage', 1) && DataSource.get('operatorManage', 1).accountId
let token = DataSource.get('userInfo', 1) && DataSource.get('userInfo', 1).token_im
let type = 'APP'

import {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
} from '@/store/types'

const mutations = {
  SOCKET_ONOPEN,
  SOCKET_ONCLOSE,
  SOCKET_ONERROR,
  SOCKET_ONMESSAGE,
  SOCKET_RECONNECT,
  SOCKET_RECONNECT_ERROR
}

Vue.use(VueNativeSock, tool.app.webSocketUrl + type + ',' + accountId + ',' + token, {
  store: store,
  mutations: mutations,
  format: 'json',
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 1000 // (Number) how long to initially wait before attempting a new (1000)
})
