import * as API from './'

export default {
  articleClassList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/articleclass/classList', params, loadings)
    } else {
      return API.POST('/article/articleClassList', params, loadings)
    }
  },
  articleManagerList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/articleManager/list', params, loadings)
    } else {
      return API.POST('/article/articleManagerList', params, loadings)
    }
  },
  increaseReadCount: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/articleread/increaseReadCount', params, loadings)
    } else {
      return API.POST('/article/increaseReadCount', params, loadings)
    }
  },
  getArticleDetail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/articleManager/getArticleDetail', params, loadings)
    } else {
      return API.POST('/article/getArticleDetail', params, loadings)
    }
  },
  // 查询一级分类
  lmGroupListOneLevel: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/lmGroup/listOneLevel', params, loadings)
    } else {
      return API.POST('/article/lmGroupListOneLevel', params, loadings)
    }
  },
  // 查询一级分组下包括所有二级分组的对应机构的文章
  lmGroupArticleList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/lmGroup/articleList', params, loadings)
    } else {
      return API.POST('/article/lmGroupArticleList', params, loadings)
    }
  },
  // 课程分类列表查询
  courseClassList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/courseclass/list', params, loadings)
    } else {
      return API.POST('/article/courseClassList', params, loadings)
    }
  },
  // 课程列表
  courseList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/melzg/course/list', params, loadings)
    } else {
      return API.POST('/article/courseList', params, loadings)
    }
  },
}