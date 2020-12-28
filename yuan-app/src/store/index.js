import Vue from 'vue'
import Vuex from 'vuex'
let modules = require.context('./module',true,/\.js$/)// 一次性导入多个模块 参数: 路径，Boolean(是否遍历子目录),正则规则某种格式文件
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
 modules,
 getters
})


