import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    setData(state) {
      console.log(state);
      state.user = 2
    }
  },
  actions: {
    getData: ({
      commit
    }) => {
      console.log(commit);
      commit('setData')
    }
  },
  modules: {

  }
})