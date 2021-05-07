export default [{
    path: '/',
    redirect: '/login',
    meta: {
      title: 'WaWaWa'
    },
    component: () => import('@/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Wa'
    },
    component: () => import('@/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '让你 Wa O ~~~~'
    },
    component: () => import('@/views/Home')
  }
]