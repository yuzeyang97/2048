import * as ActionTypes from '../const/ActionTypes';
const initialState = {
    currentUnreview:[],
    currentReview:[],
    allUnreview:[],
    allReview:[]
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
            if(belong=='currentUnreview'){
                const idex=newState.currentUnreview.indexOf(item)
                const reviewItemId=newState.currentUnreview.splice(idex,1)[0]
                newState.currentReview.unshift(reviewItemId);
                newState.allReview.unshift(reviewItemId)
            }
            if(belong=='allUnreview'){
                const idex=newState.allUnreview.indexOf(item)
                const reviewItemId=newState.allUnreview.splice(idex,1)[0]
                newState.allReview.unshift(reviewItemId)
            }
            return newState
        }
        default:
            return state
    }
}
export default reducer
