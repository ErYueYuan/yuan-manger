import * as types from '../types.js'
import DataSource from '../../common/DataSource'

const state = {
  userMess : DataSource.get('userMess', 1) ? DataSource.get('userMess', 1) : {}
}
const mutations = {
  [types.USERMESS](state, userMess) {
    state.userMess = userMess;
  }
}

const getters = {
  userMess : state => state.userMess
}
const actions = {
  setUserMess: ({commit}, userMess) => {
    commit(types.USERMESS, userMess)
  },
}
export default {
  state, mutations, getters, actions
}
