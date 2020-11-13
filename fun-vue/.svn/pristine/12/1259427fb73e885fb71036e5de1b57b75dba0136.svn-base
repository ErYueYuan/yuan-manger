import Vue from 'vue'
import Router from 'vue-router'
import routerFile from './routerFile'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  /*
  mode: 默认值为’hash’,可选值: “hash” | “history” | “abstract”.
  1. hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
  2. history: 依赖 HTML5 History API 和服务器配置 （不带#）
  3. abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。
  */
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerFile,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
  // scrollBehavior: () => ({ y: 0 }),
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
