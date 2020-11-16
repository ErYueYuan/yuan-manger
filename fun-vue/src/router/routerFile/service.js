export default [
    {
      path: '/service',
      name: 'service',
      meta: {title: '产品服务'},
      component: () => import(/* webpackChunkName: "service" */ '@/views/service/DealService')
    },
    {
      path: '/dealDetails/:r/:q',
      name: 'dealdetails',
      meta: {title: '订单详情'},
      component: () => import(/* webpackChunkName: "service" */ '@/views/service/Dealdetails')
    },
    {
      path: '/wdetails/:r',
      name: 'wdetails',
      meta: {title: '详情'},
      component: () => import(/* webpackChunkName: "service" */ '@/views/service/Wdetails')
    },
  ]