import * as API from './'
export default {
  login: (params, loadings) => {
    if (process.env.Node_ENV == "development") {
      return API.POST('/chmobile/login', params, loadings)
    } else {
      return API.POST('/login', params, loadings)
    }
  }
}