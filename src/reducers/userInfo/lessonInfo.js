import * as ActionTypes from '../../const/ActionTypes';


const initialState = {
    onlineCourseResult: [],
    historyCourseResult: [],
    lessonsList: {},
    classes: {},
    teachers: {}
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_INFO}_REQ`: {
            const newState = { ...state, loadFlag: true }
            return newState
        }
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
            const {onlineCourse,historyCourse}=action.data
            const newState = {
                ...state,
                onlineCourseResult: onlineCourse.result,
                historyCourseResult: historyCourse.result,
                lessonsList: {...onlineCourse.entities.currentLessonsList,...historyCourse.entities.historyLessonsList},
                classes: {...onlineCourse.entities.classes,...historyCourse.entities.classes},
                teachers: {...onlineCourse.entities.teachers,...historyCourse.entities.teachers}
            }
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