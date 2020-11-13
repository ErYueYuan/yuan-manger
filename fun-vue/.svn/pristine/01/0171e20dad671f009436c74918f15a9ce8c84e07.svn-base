import * as types from '../types.js'

const state = {
  socket: {
    isConnected: false,
    message: {},
    reconnectError: false
  }
}

const mutations = {
  [types.SOCKET_ONOPEN](state, event) {
    state.socket.isConnected = true
  },
  [types.SOCKET_ONCLOSE](state, event) {
    state.socket.isConnected = false
  },
  [types.SOCKET_ONERROR](state, event) {
    console.error(state, event)
  },
  // default handler called for all methods
  [types.SOCKET_ONMESSAGE](state, message) {
    console.log(message)
    state.socket.message = message
  },
  // mutations for reconnect methods
  [types.SOCKET_RECONNECT](state, count) {
    console.info(state, count)
  },
  [types.SOCKET_RECONNECT_ERROR](state) {
    state.socket.reconnectError = true
  }
}

export default {
  namespaces: true,
  state,
  mutations
}
