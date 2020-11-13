export default [
  {
    path: '/productList/:type',
    name: 'productList',
    meta: {title: '产品列表'},
    component: () => import(/* webpackChunkName: "product" */ '@/views/product/ProductList')
  },
]
