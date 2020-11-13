import * as API from './'

export default {
    // 行销列表-客户列表查询-搜索
    getCustomerSearchList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/customer/funapp/customerSearch/getCustomerSearchList', params, loadings)
        } else {
            return API.POST('/sell/getCustomerSearchList', params, loadings)
        }
    },
    // 数字行销-获取客户列表
    getCustomerList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getCustomerList', params, loadings)
        } else {
            return API.POST('/sell/getCustomerList', params, loadings)
        }
    },
    // 字典
    sysDict: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { // 本地环境
            return API.GET('/funzgapi/funapi/user/uPersonalCenter/sysDict/' + params.type, params, loadings)
        } else {
            return API.POST('/sell/sysDict', params, loadings)
        }
    },
    // 行销列表->查询客户基本介绍
    queryBasicIntroduction: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryBasicIntroduction', params, loadings)
        } else {
            return API.POST('/sell/queryBasicIntroduction', params, loadings)
        }
    },
    // 客户详情->根据ID查询客户详情
    getCustomerDetail: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getCustomerDetail', params, loadings)
        } else {
            return API.POST('/sell/getCustomerDetail', params, loadings)
        }
    },
    // 查询家庭成员列表
    getFamilyList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getFamilyList', params, loadings)
        } else {
            return API.POST('/sell/getFamilyList', params, loadings)
        }
    },
    // 客户详情-客户标签查询
    getTags: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getTags', params, loadings)
        } else {
            return API.POST('/sell/getTags', params, loadings)
        }
    },
    // 客户详情-查询客户已购商品
    getCustomerProduct: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/customer/funzg/customerProduct/getCustomerProduct', params, loadings)
        } else {
            return API.POST('/sell/getCustomerProduct', params, loadings)
        }
    },
    // 客户详情-查询已购产品标签
    getProductTag: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/customer/funzg/customerProduct/getProductTag', params, loadings)
        } else {
            return API.POST('/sell/getProductTag', params, loadings)
        }
    },
    // 客户详情-跟进列表查询
    queryFollowUpList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryFollowUpList', params, loadings)
        } else {
            return API.POST('/sell/queryFollowUpList', params, loadings)
        }
    },
    // 客户详情-已选标签
    queryCustomerTags: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryCustomerTags', params, loadings)
        } else {
            return API.POST('/sell/queryCustomerTags', params, loadings)
        }
    },
    // 客户详情-客户画像
    queryCustomerPortrait: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryCustomerPortrait', params, loadings)
        } else {
            return API.POST('/sell/queryCustomerPortrait', params, loadings)
        }
    },
    // 客户详情-编辑客户标签
    editCustomerTags: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/editCustomerTags', params, loadings)
        } else {
            return API.POST('/sell/editCustomerTags', params, loadings)
        }
    },
    // 客户详情-查询客户互动接口
    getCustomerInteract: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/customerInteract/getCustomerInteract', params, loadings)
        } else {
            return API.POST('/sell/getCustomerInteract', params, loadings)
        }
    },
    // // 客户详情-互动情况最近轨迹
    // getCustomerLastTrail: (params, loadings) => {
    //     if (process.env.NODE_ENV === 'development') { //本地环境
    //         return API.POST('/funzgapi/funapi/log/fun/customerTrail/getCustomerLastTrail', params, loadings)
    //     } else {
    //         return API.POST('/sell/getCustomerLastTrail', params, loadings)
    //     }
    // },
    //客户计划书列表（历史方案）
    queryProposalList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/melzg/proposal/list/customer', params, loadings)
        } else {
            return API.POST('/sell/queryProposalList', params, loadings)
        }
    },
    // 历史方案删除
    delProposalList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/melzg/proposal/delete', params, loadings)
        } else {
            return API.POST('/sell/delProposalList', params, loadings)
        }
    },
    // 添加家庭成员
    addFamilyMember: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            // return API.POST('/funzgapi/funapi/funzg/funapp/family/addFamilyMember', params, loadings)
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/addFamilyMember', params, loadings)
        } else {
            return API.POST('/sell/addFamilyMember', params, loadings)
        }
    },
    // 新增跟进记录
    addFollowUp: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/addFollowUp', params, loadings)
        } else {
            return API.POST('/sell/addFollowUp', params, loadings)
        }
    },
    // 编辑跟进记录页面回显信息
    getFollowInfo: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
        return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/getFollowInfo', params, loadings)
        } else {
        return API.POST('/sell/getFollowInfo', params, loadings)
        }
    },
    // 编辑跟进记录
    editFollowUp: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
        return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/editFollowUp', params, loadings)
        } else {
        return API.POST('/sell/editFollowUp', params, loadings)
        }
    },
    // 客户信息修改
    updateCustomerDetail: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/updateCustomerDetail', params, loadings)
        } else {
            return API.POST('/sell/updateCustomerDetail', params, loadings)
        }
    },
    // 获取地区
    sysArea: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.GET('/funzgapi/funapi/config/cbsconfig/sysArea/list/' + params.type, params, loadings)
        } else {
            return API.POST('/sell/sysArea', params, loadings)
        }
    },
    // 职业
    sysOccup: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.GET('/funzgapi/funapi/config/sysDict/childDictList/' + params.type, params, loadings)
        } else {
            return API.POST('/sell/sysOccup', params, loadings)
        }
    },
    // 客户订单列表查询
    customerOrderList: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funOrder/customerOrderList', params, loadings)
        } else {
            return API.POST('/sell/customerOrderList', params, loadings)
        }
    },
    // 查询访问轨迹
    getCusVisitTrail: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/customer/funapp/cusVisitTrail/getCusVisitTrail', params, loadings)
        } else {
            return API.POST('/sell/getCusVisitTrail', params, loadings)
        }
    },
    // 订单轨迹
    queryOrderLog: (params, loadings) => { // 订单详情接口
        if (process.env.NODE_ENV === 'development') {
          return API.GET('/funzgapi/funapi/insure/orderLog/list/' + params.type, params, loadings)
        } else {
          return API.POST('/sell/queryOrderLog', params, loadings)
        }
    },
    // 取数
    getAgentAccess: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/agentAccess/getAgentAccess', params, loadings)
        } else {
            return API.POST('/sell/getAgentAccess', params, loadings)
        }
    },
    // 代理人分配客户
    assignAgentData: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/agentAccess/assignAgentData', params, loadings)
        } else {
            return API.POST('/sell/assignAgentData', params, loadings)
        }
    },
    // 自建客户
    customerAdd: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
        return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/customerAdd', params, loadings)
        } else {
        return API.POST('/sell/customerAdd', params, loadings)
        }
    },
    // 查询客户画像详情
    queryCustomerPortraitDetail: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/queryCustomerPortraitDetail', params, loadings)
        } else {
            return API.POST('/sell/queryCustomerPortraitDetail', params, loadings)
        }
    },
    // 请求添加好友
    addFriends: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
          return API.POST('/imapi/scrm-im-api/chat/record/add', params, loadings)
        } else {
          return API.POST('/sell/addFriends', params, loadings)
        }
    },
    // 更新加微信状态
    editAddWeChatStatus: (params, loadings) => {
        if (process.env.NODE_ENV === 'development') { //本地环境
            return API.POST('/funzgapi/funapi/funzg/funapp/digitalMarketing/editAddWeChatStatus', params, loadings)
        } else {
            return API.POST('/sell/editAddWeChatStatus', params, loadings)
        }
    },
}
