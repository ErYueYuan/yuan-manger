export default [
  {
    path: '/messList',
    name: 'messList',
    meta: {title: '会话消息'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/MessList')
  },
  {
    path: '/messWindow/:p',
    name: 'messWindow',
    meta: {title: '会话消息'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/MessWindow')
  },
  {
    path: '/systemNews',
    name: 'systemNews',
    meta: {title: '系统消息'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/SystemNews')
  },
  {
    path: '/insureNewsInfo/:id',
    name: 'insureNewsInfo',
    meta: {title: '投保意向详情'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/InsureNewsInfo')
  },
  {
    path: '/fastReply',
    name: 'fastReply',
    meta: {title: '快捷回复'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/FastReply')
  },
  {
    path: '/visitornews',
    name: 'visitornews',
    meta: {title: '访客雷达'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/VisitorNews')
  },
  {
    path: '/systemNewsInfo/:id/:index/:type',
    name: 'systemNewsInfo',
    meta: {title: '系统消息'},
    component: () => import(/* webpackChunkName: "mess" */ '@/views/mess/SystemNewsInfo')
  },
]