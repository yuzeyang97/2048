import * as ActionTypes from '../const/ActionTypes';
import { combineReducers } from 'redux'
function homework(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.homework}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities.homework}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.homework}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities.homework}
        }
        default:
            return state
    }
}
function author(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.author}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities.author}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.author}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities.author}
        }
        default:
            return state
    }
}
function classInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.classInfo}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities.classInfo}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.classInfo}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities.classInfo}
        }
        default:
            return state
    }
}
function comments(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.comments}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities.comments}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.comments}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities.comments}
        }
        default:
            return state
    }
}
function teacherInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.teacherInfo}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,...action.data.entities.teacherInfo}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,...action.data.entities.teacherInfo}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,...action.data.entities.teacherInfo}
        }
        default:
            return state
    }
}

export default combineReducers({
    homework,
    author,
    classInfo,
    comments,
    teacherInfo
})