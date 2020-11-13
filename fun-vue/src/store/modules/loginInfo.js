import * as types from '../types.js'
import DataSource from '../../common/DataSource'

const state = {
    user : DataSource.get('userInfo', 1) ? DataSource.get('userInfo', 1) : {}
}
const mutations = {
    [types.LOGININFO](state, user) {
        state.user = user;
    }
}

const getters = {
    user : state => state.user
}
const actions = {
    setUser: ({commit}, user) => {
        commit(types.LOGININFO, user)
    }
}
export default {
    state, mutations, getters, actions
}
