import Vue from 'vue'
import Vuex from 'vuex'

import loginInfo from './modules/loginInfo'
import userSign from './modules/userSign'
import userMess from './modules/userMess'
import userHead from './modules/userHead'
import socketMsg from './modules/socket'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        loginInfo,
        userSign,
        userMess,
        userHead,
        socketMsg
    }
})
