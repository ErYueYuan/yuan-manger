export default[
    {
        path:'/',
        redirect:'/login',
        meta:{
            titel:'Life'
        },
        component:()=>import('@/Login')
    },
]