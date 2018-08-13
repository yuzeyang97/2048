import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    blocResult: [101],
    result: {
        comment: {type:'comment', title:'点评作业',description:'拥有个人点评页 可以为学生作业进行点评',person:[1000001, 1000005, 1000003]},
        substitute:{type:'substitute',title:'代课老师',description:'拥有审核点评老师点评内容的权限,包括撤回点评,自行点评',person:[1000002, 1000004, 1000006]}
    },
    currentView: 'comment',
    currentSelect:100003,
    configFlag:true,
    filterHandleResult:'',
    filterHandleLoad:'',
    deleteflag:false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.CHANGE_CURRENT_SELECT}`: {
            return {...state,currentSelect:action.data}
        }
        case `${ActionTypes.CHANGE_CURRENT_VIEW}`: {
            return {...state,currentView:action.data}
        }
        case `${ActionTypes.SHOW_CONFIG}`: {
            return {...state,configFlag:action.data}
        }
        case `${ActionTypes.FILTER_HANDLE_RESULT}`: {
            return {...state,filterHandleResult:action.data}
        }
        case `${ActionTypes.FILTER_HANDLE_LOAD}`: {
            return {...state,filterHandleLoad:action.data}
        }
        case `${ActionTypes.ADD_PERSON}`: {
            const newState={...state}
            newState.result[action.data.type].person.push(action.data.id)
            return newState
        }
        case `${ActionTypes.DELETE_PERSON}`: {
            const newState={...state}
            const index=newState.result[action.data.type].person.indexOf(action.data.id)
            newState.result[action.data.type].person.splice(index,1)
            return newState
        }
        case `${ActionTypes.DELETE_FLAG}`: {
            const newState={...state}
            newState.deleteflag=action.data
            return newState
        }
        default:
            return state
    }
}
export default reducer