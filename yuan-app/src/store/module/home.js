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
let getters = {
    user:state=>state.user
}

export default {
    state,
    mutations,
    actions,
    getters
}