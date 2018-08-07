import * as ActionTypes from '../const/ActionTypes';
import { combineReducers } from 'redux'
function lessonInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
            const { onlineCourse, historyCourse } = action.data
            const newState = {
                ...state,
                lessonsList: { ...onlineCourse.entities.currentLessonsList, ...historyCourse.entities.historyLessonsList },
                classes: { ...onlineCourse.entities.classes, ...historyCourse.entities.classes },
                teachers: { ...onlineCourse.entities.teachers, ...historyCourse.entities.teachers }
            }
            return newState
        }
        default:
            return state
    }
}

function satisfiled(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const { entities } = action.data
            const newState = { ...state, entities}
            return newState
        }
        default:
            return state
    }
}

function classInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_CLASS_INFO}_SUC`: {
            const classList = action.data.list
            const classListentities = classList.entities.classList
            const newState = { ...state, classListentities }
            return newState
        }
        default:
            return state
    }
}

function studentList(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
            const { entities } = action.data
            const newState = { ...state, entities }
            return newState
        }
        default:
            return state
    }
}

function currentUnreviw(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities}
        }
        default:
            return state
    }
}

export default combineReducers({
    lessonInfo,
    satisfiled,
    classInfo,
    studentList,
    currentUnreviw
})