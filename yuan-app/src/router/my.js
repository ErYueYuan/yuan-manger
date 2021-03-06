export default [{
        path: '/my',
        name: 'my',
        meta: {
            title: '我的'
        },
        component: () => import('@/views/my/My.vue')
    },
    {
        path: '/recorde',
        name: 'recode',
        meta: {
            title: '我的档案'
        },
        component: () => import('@/views/my/Record.vue')
    },
    {
        path: '/messge',
        name: 'messge',
        meta: {
            title: '我的信息'
        },
        component: () => import('@/views/my/Messges')
    },
    {
        path: '/group',
        name: 'group',
        meta: {
            title: '我的成长'
        },
        component: () => import('@/views/my/Group.vue')
    },
    {
        path: '/profession',
        name: 'profession',
        meta: {
            title: '我的档案'
        },
        component: () => import('@/views/my/Profession.vue')
    },
]