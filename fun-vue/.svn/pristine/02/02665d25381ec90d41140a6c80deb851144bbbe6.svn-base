import * as types from '../types.js'

const state = {
  socketMsg :''
}
const mutations = {
  [types.SOCKETMSG](state, socketMsg) {
      state.socketMsg = socketMsg;
  }
}

const getters = {
  socketMsg : state => state.socketMsg
}
const actions = {
  socketMsg: ({commit}, socketMsg) => {
      commit(types.SOCKETMSG, socketMsg)
  },
}
export default {
  state, mutations, getters, actions
}
