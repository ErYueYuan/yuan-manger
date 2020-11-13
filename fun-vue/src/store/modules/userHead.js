import * as types from '../types.js'
import DataSource from '../../common/DataSource'

const state = {
  userHead : DataSource.get('userHead', 1) ? DataSource.get('userHead', 1) : {}
}
const mutations = {
  [types.USERHEAD](state, userHead) {
    state.userHead = userHead;
  }
}

const getters = {
  userHead : state => state.userHead
}
const actions = {
  setUserHead: ({commit}, userHead) => {
    commit(types.USERHEAD, userHead)
  },
}
export default {
  state, mutations, getters, actions
}
