/**数字行销 */
export default [
    {
      path: '/sellList/:q',
      name: 'sellList',
      meta: {title: '行销列表'},
      component: () => import(/* webpackChunkName: "sell" */ '@/views/sell/SellList')
    },
    {
      path: '/customerDetail/:q/:r/:s',
      name: 'customerDetail',
      meta: {title: '客户详情'},
      component: () => import(/* webpackChunkName: "sell" */ '@/views/sell/CustomerDetail')
    },
    {
      path: '/editLabel/:r/:s',
      name: 'editLabel',
      meta: {title: '编辑标签'},
      component: () => import(/* webpackChunkName: "sellTag" */ '@/views/sell/EditLabel')
    },
    {
      path: '/createCustomer',
      name: 'createCustomer',
      meta: {title: '自建客户'},
      component: () => import(/* webpackChunkName: "sellAdd" */ '@/views/sell/CreateCustomer')
    },
    {
      path: '/editCustomerDetail/:q/:r/:s/:t',
      name: 'editCustomerDetail',
      meta: {title: '编辑客户信息'},
      component: () => import(/* webpackChunkName: "sellCustomer" */ '@/views/sell/EditCustomerDetail')
    },
    {
      path: '/followRecord/:p/:q/:r/:s',
      name: 'followRecord',
      meta: {title: '新增编辑跟进记录'},
      component: () => import(/* webpackChunkName: "sellAdd" */ '@/views/sell/FollowRecord')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      meta: {title: '搜索'},
      component: () => import(/* webpackChunkName: "sellCustomer" */ '@/views/sell/SearchResult')
    },
    {
      path: '/addFamily/:q/:r',
      name: 'addFamily',
      meta: {title: '添加家庭成员'},
      component: () => import(/* webpackChunkName: "sellCustomer" */ '@/views/sell/AddFamily')
    },
    {
      path: '/orderLogList/:q',
      name: 'orderLogList',
      meta: {title: '订单轨迹'},
      component: () => import(/* webpackChunkName: "sellTrail" */ '@/views/sell/OrderLogList')
    },
    {
      path: '/portraitDetail/:q/:r',
      name: 'portraitDetail',
      meta: {title: '客户画像详情'},
      component: () => import(/* webpackChunkName: "sellInfo" */ '@/views/sell/PortraitDetail')
    },
    
  ]
  