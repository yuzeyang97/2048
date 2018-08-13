import * as ActionTypes from '../const/ActionTypes';
const initialState = {
    currentUnreview:[],
    currentReview:[],
    allUnreview:[],
    allReview:[],
    filterMid:''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.GET_CURRENT_UNREVIEW}_SUC`: {
            return {...state,currentUnreview:action.data.result}
        }
        case `${ActionTypes.GET_CURRENT_REVIEW}_SUC`: {
            return {...state,currentReview:action.data.result}
        }
        case `${ActionTypes.GET_ALL_UNREVIEW}_SUC`: {
            return {...state,allUnreview:action.data.result}
        }
        case `${ActionTypes.GET_ALL_REVIEW}_SUC`: {
            return {...state,allReview:action.data.result}
        }
        case `${ActionTypes.REVIEW_HOMWWORK}`: {
            const {belong,item}=action.data
            const newState={...state}
            if(belong=='currentUnreview'||belong=='allUnreview'){
                const idex=newState.currentUnreview.indexOf(item)
                const idex2=newState.allUnreview.indexOf(item)
                if(idex!==-1){
                    newState.currentUnreview.splice(idex,1)
                    newState.currentReview.unshift(item);
                }
                newState.allUnreview.splice(idex2,1)
                newState.allReview.unshift(item);
            }
            return newState
        }
        case `${ActionTypes.SEARCH_HOMEWORK}`: {
            return {...state,filterMid:action.data}
        }
       
        default:
            return state
    }
}
export default reducer
