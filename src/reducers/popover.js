import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    flag:false,
    msg:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.SHOW_POPOVER}`: {
            const newState={...state};
            newState.flag=true;
            const msg=action.data.teacher_info||action.data.teacherInfo
            newState.msg={
                nick: msg.nick,
                id: msg.id,
                wxCode: msg.wxCode||msg.wx_code,
                realName: msg.realName||msg.real_name,
                mid: msg.mid,
                wx: msg.wxCode||msg.wx_code
            }
            return newState
        }
        case `${ActionTypes.HIDE_POPOVER}`: {
            const newState={...state};
            newState.flag=false;
            newState.msg=''
            return newState
        }
        default:
            return state
    }
}
export default reducer