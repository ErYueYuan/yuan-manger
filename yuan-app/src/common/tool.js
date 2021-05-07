import store from '@/store/index'
export function setUser(msg){
    store.dispatch('setUser', msg);
}