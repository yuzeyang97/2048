import * as ActionTypes from '../../const/ActionTypes';
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
        default:
            return state
    }
}
export default reducer
