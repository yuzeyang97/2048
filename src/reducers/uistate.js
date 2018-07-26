const initialState = {
    changeFlag: false,
    addFlag: false,
    mulflag: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'showChangeDialog': {
            return { ...state, changeFlag: true }
        }
        case 'showAddDialog': {
            return { ...state, addFlag: true }
        }
        case 'closeDialog': {
            return { ...state, addFlag: false, changeFlag: false }
        }
        case 'showMulSelect': {
            return { ...state, mulflag: !state.mulflag }
        }
        default: return state
    }
}

export default reducer
