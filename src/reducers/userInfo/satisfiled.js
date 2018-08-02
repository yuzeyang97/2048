import * as ActionTypes from '../../const/ActionTypes';
const initialState = {
    satisFiledList: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_INFO}_REQ`: {
            const newState = { ...state, loadFlag: true }
            return newState
        }
        case `${ActionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const newSatisFiledList = action.data.list.map((item, index) => {
                return {
                    key: index + 1,
                    course_name: item.course_name,
                    time: item.time,
                    nick: item.teacher_info.nick,
                    satisfied_score: item.satisfied_score,
                    satisfied_detail: item.satisfied_detail,
                    reply_status: item.reply_status,
                    teacher_info:item.teacher_info
                }
            })
            const newState = { ...state,satisFiledList: newSatisFiledList}
            return newState
        }
        case `${ActionTypes.FETCH_SATISFILED_LIST}_FAI`: {
            return state
        }
        case `${ActionTypes.CHANGE_SATISFILED}`: {
            const newState = {...state}
            newState.satisFiledList[action.data].reply_status=1
            return newState

        }
        default:
            return state
    }
}
export default reducer