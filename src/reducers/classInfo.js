import * as ActionTypes from '../const/ActionTypes';
const initialState = {
    basicInfo: {},
    keysMap: {
        className: "班级",
        classID: "班级ID",
        realmid: "ID",
        realname: "老师",
        realwxcode: "微信",
        virtname: "负责员工",
        virtmid: 'ID',
        virwxcode: '微信'
    },
    classListResult: [],
    classListentities: {},
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_CLASS_INFO}_SUC`: {
            const classList = action.data.list
            const classListentities = classList.entities.classList
            const result = classList.result
            const { basic_info } = action.data
            const newbasicInfo = {
                classID: basic_info.id,
                className: basic_info.name,
                realmid: basic_info.real_teacher.mid,
                realname: basic_info.real_teacher.name,
                realwxcode: basic_info.real_teacher.wx_code,
                virtmid: basic_info.virtual_teacher.id,
                virtname: basic_info.virtual_teacher.nick,
                virwxcode: basic_info.virtual_teacher.wx_code,
            }
            const newState = { ...state, classListResult: result, classListentities, basicInfo: newbasicInfo }
            return newState
        }
        case `${ActionTypes.FETCH_CLASS_INFO}_FAI`: {
            return state
        }
        default:
            return state
    }
}
export default reducer