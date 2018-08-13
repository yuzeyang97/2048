import * as ActionTypes from '../../const/ActionTypes';
const initialState = {
        entities:{},
        result:[]
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case `${ActionTypes.FETCH_INFO}_REQ`: {
            const newState = { ...state, loadFlag: true }
            return newState
        }
        case `${ActionTypes.FETCH_SATISFILED_LIST}_SUC`: {
            const { entities,result } = action.data
            const newState = { ...state,entities,result}
            return newState
        }
        case `${ActionTypes.FETCH_SATISFILED_LIST}_FAI`: {
            return state
        }
        case `${ActionTypes.CHANGE_SATISFILED}`: {
            const newState = { ...state }
            newState.entities.satisfiled[action.data.time].reply_status = 1
            return newState

        }
        default:
            return state
    }
}
export default reducer