import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    userInfo: {
    },
    keysMap: {
        mid: "学号编号",
        learningLesson: "在学课程",
        enterDate: "入学时间",
        history_pay: "历史付费额",
        totalLearningDays: "累计学习天数",
        lastLoginDate: "最后登录时间",
        tel: "手机号码",
        weiChatCode: "微信号码",
        remark: "备注"
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case `${ActionTypes.FETCH_USER_INFO}_SUC`: {
        action.data.learningLesson.join(' ')
        const newState = { ...state, userInfo: { ...action.data }, loadFlag: false }
        return newState
      }
      case `${ActionTypes.FETCH_USER_INFO}_FAI`: {
        return state
      }
      default:
        return state
    }
  }
  
  export default reducer