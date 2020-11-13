export default [
  {
    path: '/resetPwd',
    name: 'resetPwd',
    meta: {title: '找回密码'},
    component: () => import(/* webpackChunkName: "resetPwd" */ '@/views/setting/ResetPassword')
  },
  {
    path: '/my',
    name: 'my',
    meta: {title: '我的'},
    component: () => import(/* webpackChunkName: "my" */ '@/views/my/My')
  },
  {
    path: '/articleList/:path',
    name: 'articleList',
    meta: {
      title: '获课文章',
      keepAlive: true
    },
    component: () => import(/* webpackChunkName: "article" */ '@/views/article/ArticleList')
  },
  {
    path: '/articleDetail/:id',
    name: 'articleDetail',
    meta: {title: '文章详情'},
    component: () => import(/* webpackChunkName: "article" */ '@/views/article/ArticleDetail')
  },
  {
    path: '/coursesList',
    name: 'coursesList',
    meta: {title: '学习课堂'},
    component: () => import(/* webpackChunkName: "courses" */ '@/views/courses/CoursesList')
  },
  {
    path: '/userSetting',
    name: 'userSetting',
    meta: {title: '个人设置'},
    component: () => import(/* webpackChunkName: "setting" */ '@/views/my/UserSetting'),
  },
  {
    path: '/amendPassword',
    name: 'amendPassword',
    meta: {title: '修改密码'},
    component: () => import(/* webpackChunkName: "setting" */ '@/views/my/AmendPassword'),
  },
  {
    path: '/myRecord',
    name: 'myRecord',
    meta: {title: '我的档案'},
    component: () => import(/* webpackChunkName: "myRecord" */ '@/views/my/MyRecord'),
  },
  {
    path: '/repository',
    name: 'repository',
    meta: {title: '知识库'},
    component: () => import(/* webpackChunkName: "repository" */ '@/views/my/Repository'),
  },
  //知识库详情
  {
    path: '/repositorydetails/:p',
    name: 'repositorydetails',
    meta: {title: ''},
    component: () => import(/* webpackChunkName: "repositorydetails" */ '@/views/my/RepositoryDetails'),
  },
  {
    path: '/client',
    name: 'client',
    meta: {title: '我的客户'},
    component: () => import(/* webpackChunkName: "client" */ '@/views/my/Client'),
  },
  {
    path: '/achieveclient',
    name: 'achieveclient',
    meta: {title: '成交客户'},
    component: () => import(/* webpackChunkName: "achieveclient" */ '@/views/my/AchieveClient'),
  },
  {
    path: '/marketing',
    name: 'marketing',
    meta: {title: '营销政策'},
    component: () => import(/* webpackChunkName: "marketing" */ '@/views/my/Marketing'),
  },
  {
    path: '/marketactivity',
    name: 'marketactivity',
    meta: {title: '营销活动'},
    component: () => import(/* webpackChunkName: "marketactivity" */ '@/views/my/Marketactivity'),
  },
  {
    path: '/performance',
    name: 'performance',
    meta: {title: '我的业绩'},
    component: () => import(/* webpackChunkName: "performance" */ '@/views/my/Performance'),
  },
  {
    path: '/qrcode',
    name: 'qrcode',
    meta: {title: '配置二维码'},
    component: () => import(/* webpackChunkName: "qrcode" */ '@/views/my/QRcode'),
  },
  {
    path: '/proposalList/:path',
    name: 'proposalList',
    meta: {title: '计划书'},
    component: () => import(/* webpackChunkName: "setting" */ '@/views/proposal/ProposalList'),
  },
  {
    path: '/fastReply/:type',
    name: 'fastReply',
    meta: {title: '计划书'},
    component: () => import(/* webpackChunkName: "setting" */ '@/views/mess/FastReply'),
  },
  {
    path: '/materialStore/:type',
    name: 'materialStore',
    meta: {title: '素材库'},
    component: () => import(/* webpackChunkName: "setting" */ '@/views/my/MaterialStore'),
  },


]

