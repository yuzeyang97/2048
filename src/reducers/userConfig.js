import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    blocResult: [1],
    result: {
        comment: {type:'comment', title:'点评作业',description:'拥有个人点评页 可以为学生作业进行点评',person:[1000001, 1000005, 1000003]},
        substitute:{type:'substitute',title:'代课老师',description:'拥有审核点评老师点评内容的权限,包括撤回点评,自行点评',person:[1000002, 1000004, 1000006]}
    },
    powerType: 'comment',
    currentSelect:100003,
    configFlag:true,
    filterPowerBtnView:'',
    filterEmployeeBtnView:'',
    selectList:[],
    deleteSelectList:[]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.CHANGE_CURRENT_SELECT}`: {
            return {...state,currentSelect:action.data}
        }
        case `${ActionTypes.CHANGE_POWER_TYPE}`: {
            return {...state,powerType:action.data}
        }
        case `${ActionTypes.SHOW_CONFIG}`: {
            return {...state,configFlag:action.data}
        }
        case `${ActionTypes.FILTER_POWER_BTNVIEW}`: {
            return {...state,filterPowerBtnView:action.data}
        }
        case `${ActionTypes.FILTER_EMPLOYEE_BTNVIEW}`: {
            return {...state,filterEmployeeBtnView:action.data}
        }
        case `${ActionTypes.ADD_PERSON}`: {
            const newState={...state}
            newState.result[action.data.powerType].person=newState.result[action.data.powerType].person.concat(newState.selectList)
            newState.selectList=[]
            return newState
        }
        case `${ActionTypes.DELETE_PERSON}`: {
            const newState={...state}
            console.log(action.data)
            newState.deleteSelectList.map(item=>{
               const index= newState.result[action.data.powerType].person.indexOf(item)
               newState.result[action.data.powerType].person.splice(index,1)
            })
            newState.deleteSelectList=[]
            return newState
        }
        case `${ActionTypes.ADD_SELECT}`: {
            const newState={...state}
            newState.selectList.push(action.data)
            return newState
        }
        case `${ActionTypes.DELETE_SELECT}`: {
            const newState={...state}
            const index=newState.selectList.indexOf(action.data)
            newState.selectList.splice(index,1)
            return newState
        }
        case `${ActionTypes.ADD_DELETE_SELECT}`: {
            const newState={...state}
            newState.deleteSelectList.push(action.data)
            return newState
        }
        case `${ActionTypes.DELETE_DELETE_SELECT}`: {
            const newState={...state}
            const index=newState.deleteSelectList.indexOf(action.data)
            newState.deleteSelectList.splice(index,1)
            return newState
        }
        default:
            return state
    }
}
export default reducer