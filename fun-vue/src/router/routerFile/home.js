export default [
  {
    path: '/home',
    name: 'home',
    meta: {title: '首页'},
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home')
  },
  {
    path: '/demo',
    name: 'demo',
    meta: {title: '示例'},
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/Demo')
  },
]
