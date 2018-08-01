import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    studentList: [],
    filteredValue: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
            const newOnlineCourse = action.data.map((item, index) => {
                return {
                    key: index + 1,
                    nick: item.nick,
                    mid: item.mid,
                    enter_time: item.enter_time,
                    start_time: item.start_time,
                    learning_lessons: item.learning_lessons.length?item.learning_lessons.join(' '):'无',
                    teachers: item.teachers.length?item.teachers.join(' '):'无',
                }
            })
            const newState = { ...state, studentList: newOnlineCourse }
            return newState
        }
        case `${ActionTypes.FETCH_STUDENT_LIST}_FAI`: {
            return state
        }
        case `${ActionTypes.SEARCH_STUDENT}`: {
            const newState={...state}
            action.data?newState.filteredValue=[action.data]:newState.filteredValue=[]
            return newState
        }
        default:
            return state
    }
}
export default reducer