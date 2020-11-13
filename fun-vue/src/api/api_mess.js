import * as API from './'

export default {
  // 代理人对应客户会话列表
  getAllClientNewTalk: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/getAllClientNewTalk', params, loadings)
    } else {
      return API.POST('/mess/getAllClientNewTalk', params, loadings)
    }
  },
  // 指定客户会话窗口列表
  getOneTalkList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/getOneTalkList', params, loadings)
    } else {
      return API.POST('/mess/getOneTalkList', params, loadings)
    }
  },
  // 实时会话接口
  readTimeWindow: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/readTimeWindow', params, loadings)
    } else {
      return API.POST('/mess/readTimeWindow', params, loadings)
    }
  },
  // 系统消息
  getSystemNewsList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/cbsmh/mhMessageLog/fromESList', params, loadings)
    } else {
      return API.POST('/mess/getSystemNewsList', params, loadings)
    }
  },
  // 系统消息详情
  getMessageInfo4LZG: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/cbsmh/mh/mhThirdService/getMessageInfo4LZG', params, loadings)
    } else {
      return API.POST('/mess/getMessageInfo4LZG', params, loadings)
    }
  },
  // 系统消息(投保意向详情)
  appointmentDetail: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/funzgapi/funapi/channel/appointment/detail/' + params.type, params, loadings)
    } else {
      return API.POST('/mess/appointmentDetail', params, loadings)
    }
  },
  // 系统消息(投保意向详情)
  getOfficialAccountList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funAppOfficialAccount/getOfficialAccountList', params, loadings)
    } else {
      return API.POST('/mess/getOfficialAccountList', params, loadings)
    }
  },
  // 公众号未读消息数量接口查询
  readTimeTalkNum: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/readTimeTalkNum', params, loadings)
    } else {
      return API.POST('/mess/readTimeTalkNum', params, loadings)
    }
  },
  // 修改消息状态为已读接口
  readTimeStateEdit: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/readTimeStateEdit', params, loadings)
    } else {
      return API.POST('/mess/readTimeStateEdit', params, loadings)
    }
  },
  // 修改客户未读消息为已读
  customerTalkEdit: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/timeConversation/customerTalkEdit', params, loadings)
    } else {
      return API.POST('/mess/customerTalkEdit', params, loadings)
    }
  },
  //访客雷达
  getVisitorRadarList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/log/fun/customerTrail/getCustomerLastTrailByUserId', params, loadings)
    } else {
      return API.POST('/mess/getVisitorRadarList', params, loadings)
    }
  },
  //查询自动回复消息类型和内容接口
  funUserQuickContentGetList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUserQuickContent/getList', params, loadings)
    } else {
      return API.POST('/mess/funUserQuickContentGetList', params, loadings)
    }
  },
  //新增自动回复消息类型和内容接口
  funUserQuickContentAddContent: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUserQuickContent/addContent', params, loadings)
    } else {
      return API.POST('/mess/funUserQuickContentAddContent', params, loadings)
    }
  },
  //删除自动回复消息类型和内容接口
  funUserQuickContentDeleteContent: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUserQuickContent/deleteContent', params, loadings)
    } else {
      return API.POST('/mess/funUserQuickContentDeleteContent', params, loadings)
    }
  },
  //查询分组列表
  getFirstLevelList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUserQuickContent/getFirstLevelList', params, loadings)
    } else {
      return API.POST('/mess/getFirstLevelList', params, loadings)
    }
  },
  //修改自动回复消息类型和内容接口
  funUserQuickContentUpdateContent: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/funzgapi/funapi/funzg/funapp/funUserQuickContent/updateContent', params, loadings)
    } else {
      return API.POST('/mess/funUserQuickContentUpdateContent', params, loadings)
    }
  },
  // 查询运营者下运营号和好友信息
  getOperatorManageInfo: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/operatorManage/get', params, loadings)
    } else {
      return API.POST('/mess/getOperatorManageInfo', params, loadings)
    }
  },
  // 查询运营者下运营号
  getOperatorManageQyWx: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/imapi/scrm-im-api/chat/operatorManage/getOperatorManage/' + params.type, params, loadings)
    } else {
      return API.POST('/mess/getOperatorManageQyWx', params, loadings)
    }
  },
  // 查询运营号聊天会话接口
  getMembersTable: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/table/page', params, loadings)
    } else {
      return API.POST('/mess/getMembersTable', params, loadings)
    }
  },
  // 分页查询与好友聊天信息
  friendChatMessageInfo: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/friendChatMessage/page', params, loadings)
    } else {
      return API.POST('/mess/friendChatMessageInfo', params, loadings)
    }
  },
  // 分页查询与群聊天信息
  groupMessageInfo: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/groupMessage/page', params, loadings)
    } else {
      return API.POST('/mess/groupMessageInfo', params, loadings)
    }
  },
  // 查看好友详情
  getFriendInfo: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.GET('/imapi/scrm-im-api/chat/friendManage/get/' + params.type, params, loadings)
    } else {
      return API.POST('/mess/getFriendInfo', params, loadings)
    }
  },
  // 修改企业微信未读为已读
  chatMessageEdit: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/friendChatMessage/edit', params, loadings)
    } else {
      return API.POST('/mess/chatMessageEdit', params, loadings)
    }
  },
  // 发送聊天信息
  chatMessageAdd: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/friendChatMessage/add', params, loadings)
    } else {
      return API.POST('/mess/chatMessageAdd', params, loadings)
    }
  },
  // 查询运营者下运营号和好友信息
  getGroupFriendList: (params, loadings) => {
    if (process.env.NODE_ENV === 'development') { //本地环境
      return API.POST('/imapi/scrm-im-api/chat/operatorManage/get', params, loadings)
    } else {
      return API.POST('/mess/getGroupFriendList', params, loadings)
    }
  },
}
