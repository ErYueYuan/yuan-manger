import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from './home'
import my from './my'
const routes = [...home,...my];
console.log(routes);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

//设置页面title
router.beforeEach((to,from,next)=>{
  //判断是否有token值/验证码/状态值 登录
  // if(yanzhengma){
  //    next()
  // }else {
  //   next({
  //     path:'/login',
  //     query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //   })
  // }
  if(to.meta.title){
    document.title  = to.meta.title
  }
  next()
})

export default router
