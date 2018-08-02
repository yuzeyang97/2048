import * as ActionTypes from '../../const/ActionTypes';
const initialState = {
    onlineCourse: [],
    historyCourse: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_INFO}_REQ`: {
            const newState = { ...state, loadFlag: true }
            return newState
        }
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
            const newOnlineCourse = action.data.currentLessonsList.map((item, index) => {
                return {
                    key: index + 1,
                    class: item.classInfo.name,
                    courseState: item.status ? '进行中' : '已结束',
                    courseStart: item.startTime,
                    teacher: item.teacherInfo.nick,
                    courselv: item.enterRate,
                    homeworklv: item.homeworkSubmitRate,
                    review: item.beCommenttedRate,
                    cardlv: item.signRate,
                    degreelv: item.satisfyRate,
                    teacher_info:item.teacherInfo
                }
            })
            const newHistoryCourse = action.data.historyLessonsList.map((item, index) => {
                return {
                    key: index + 1,
                    class: item.classInfo.name,
                    courseState: item.status ? '进行中' : '已结束',
                    courseStart: item.startTime,
                    teacher: item.teacherInfo.nick,
                    courselv: item.enterRate,
                    homeworklv: item.homeworkSubmitRate,
                    review: item.beCommenttedRate,
                    cardlv: item.signRate,
                    degreelv: item.satisfyRate,
                    teacher_info:item.teacherInfo
                }
            })
            const newState = { ...state, onlineCourse: newOnlineCourse, historyCourse: newHistoryCourse, loadFlag: false }
            return newState
        }
        case `${ActionTypes.FETCH_LESSON_INFO}_FAI`: {
            return state
        }
        default:
            return state
    }
}
export default reducer