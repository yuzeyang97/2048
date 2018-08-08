import * as ActionTypes from '../const/ActionTypes';
import { combineReducers } from 'redux'
function homework(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.homework }
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.homework }
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.homework }
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.homework }
        }
        case `${ActionTypes.REVIEW_HOMWWORK}`: {
            const newState = { ...state }
            newState[action.data.item].comments.unshift(action.data.timestamp)
            return newState
        }
        default:
            return state
    }
}
function author(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.author }
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.author }
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.author }
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.author }
        }
        default:
            return state
    }
}
function classInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.classInfo }
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.classInfo }
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.classInfo }
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.classInfo }
        }
        default:
            return state
    }
}
function comments(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.comments }
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.comments }
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.comments }
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.comments }
        }
        case `${ActionTypes.REVIEW_HOMWWORK}`: {
            const newState = { ...state }
            const newComment = {
                commentator: {
                    nick: "小M老师",
                    role: "点评老师"
                },
                content: action.data.text,
                from: "teacher",
                id: action.data.timestamp,
                nick: "小白老师",
                status: "unrevised",
                time: action.data.timestamp
            }
            newState[action.data.timestamp] = newComment
            return newState
        }
        case `${ActionTypes.REVIEW_REJECT}`: {
            const newState = { ...state }
            newState[action.data].status = 'reject'
            newState[action.data].reason = '你的评价不合格哟~~~'
            return newState
        }
        default:
            return state
    }
}
function teacherInfo(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.teacherInfo }
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.teacherInfo }
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return { ...state, ...action.data.entities.teacherInfo }
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return { ...state, ...action.data.entities.teacherInfo }
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