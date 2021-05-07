import * as API from './'
export default {
  login: (params, loadings) => {
    if (process.env.NODE_ENV === "development") {
      return API.POST('/chmobile/login', params, loadings)
    } else {
      return API.POST('/login', params, loadings)
    }
  }
}