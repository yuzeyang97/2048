import * as ActionTypes from '../const/ActionTypes';

const initialState = {
    entities: {},
    result:[],
    filteredValue: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`: {
            const { entities,result } = action.data
            const newState = { ...state,entities,result}
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