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
        case `${ActionTypes.CHANGE_EXCELLENT}`: {
            const newState = { ...state }
            newState[action.data.item].isExcellent = action.data.flag
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
// userConfig
function bloc(state = {
    101: { id:101,name: '爱奇迪集团', office: [1001] }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function office(state = {
    1001: { id:1001,name: '广州分公司', department: [10001, 10002, 10003, 10004] }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function department(state = {
    10001: { id:10001,name: '总经办' },
    10002: { id:10002,name: '财务部' },
    10003: { id:10003,name: '工程部' },
    10004: { id:10004,name: '产品研发部', group: [100001, 100002, 100003] },
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function group(state = {
    100001: { id:100001,name: '开发一组', person: [1000001, 1000002, 1000003,1000006,1000005] },
    100002: { id:100002,name: '开发二组', person: [1000001, 1000005, 1000006] },
    100003: { id:100003,name: '测试组', person: [1000001, 1000004, 1000003] },
}, action) {
    switch (action.type) {
        default:
            return state
    }
}

function person(state = {
    1000001: { id:1000001,name: '白帆', mid: 1000001,comment:1,substitute:0 },
    1000002: { id:1000002,name: '王鹏', mid: 1000002,comment:0,substitute:1  },
    1000003: { id:1000003,name: '王鹏3', mid: 1000003,comment:1,substitute:0  },
    1000004: { id:1000004,name: '王鹏4', mid: 1000004 ,comment:0,substitute:1},
    1000005: { id:1000005,name: '王鹏5', mid: 1000005,comment:1,substitute:0  },
    1000006: { id:1000006,name: '王鹏6', mid: 1000006,comment:0 ,substitute:1 },
}, action) {
    switch (action.type) {
        case `${ActionTypes.ADD_PERSON}`: {
            console.log(action.data)
            return { ...state, [action.data.id]:{...state[action.data.id],[action.data.type]:1} }
        }
        case `${ActionTypes.DELETE_PERSON}`: {
            return { ...state, [action.data.id]:{...state[action.data.id],[action.data.type]:0} }
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
    teacherInfo,
    bloc,
    office,
    department,
    group,
    person
})