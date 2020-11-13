import * as API from '.'

export default {
  productTag: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/channel/product/tag', params, loadings)
    } else {
      return API.POST('/product/productTag', params, loadings)
    }
  },
  productList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/channel/product/list', params, loadings)
    } else {
      return API.POST('/product/productList', params, loadings)
    }
  },
  visitorProductList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/melzg/product/visitor/list', params, loadings)
    } else {
      return API.POST('/product/visitorProductList', params, loadings)
    }
  },
}
