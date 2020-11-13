import * as types from '../types.js'
import DataSource from '../../common/DataSource'

const state = {
  userSign : DataSource.get('userSignStatus', 1) ? DataSource.get('userSignStatus', 1) : {}
}
const mutations = {
  [types.USERSIGN](state, userSign) {
      state.userSign = userSign;
  }
}

const getters = {
  userSign : state => state.userSign
}
const actions = {
  setUserSign: ({commit}, userSign) => {
      commit(types.USERSIGN, userSign)
  },
}
export default {
  state, mutations, getters, actions
}
