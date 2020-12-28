import * as types from '../type'
let state ={
     user:''
}
let mutations ={
    [types.USER_INFO](state,msg){
        state.user = msg
    }
}
let actions = {
    setUser({commit},user) {
        commit(types.USER_INFO,user)
    }
}

export default {
    namespaced: true,
    //需要在store的index.js中引入各个模块,为了解决不同模块命名冲突的问题,
    //使用模块中的mutations、getters、actions时候，要加上模块名
    //格式：模块名/模块中的mutations
    state,
    mutations,
    actions
}