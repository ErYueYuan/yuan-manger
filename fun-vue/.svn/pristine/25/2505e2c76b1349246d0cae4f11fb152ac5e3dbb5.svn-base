import * as API from './'

export default {
  // 获取验证码
  getVerifyCode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/funzgapi/funapi/funzg/funapp/drawImage/getVerifyCode', params, loadings)
    } else {
      return API.POST('/system/getVerifyCode', params, loadings)
    }
  },
  // 获取验证码
  checkVerifyCode: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/funzgapi/funapi/funzg/funapp/drawImage/verifyCode/' + params.type, params, loadings)
    } else {
      return API.POST('/system/checkVerifyCode', params, loadings)
    }
  },
  //获取首页banner
  advertismentList4Front: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/advertisment/advertismentList4Front', params, loadings)
    } else {
      return API.POST('/system/advertismentList4Front', params, loadings)
    }
  },
  cosGetSign: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.GET('/funzgapi/funapi/config/tpTencent/cos/sign/' + params.type, params, loadings)
    } else {
      return API.POST('/system/cosGetSign', params, loadings)
    }
  },
  imageOCR: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') {
      return API.POST('/funzgapi/funapi/config/ocr', params, loadings)
    } else {
      return API.POST('/system/imageOCR', params, loadings)
    }
  },
}
