import {Show_ChangeDialog,Show_AddDialog,Close_Dialog,Show_MulSelect}  from '../const/actionType'
const initialState = {
    changeFlag: false,
    addFlag: false,
    mulflag: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Show_ChangeDialog: {
            return { ...state, changeFlag: true }
        }
        case Show_AddDialog: {
            return { ...state, addFlag: true }
        }
        case Close_Dialog: {
            return { ...state, addFlag: false, changeFlag: false }
        }
        case Show_MulSelect: {
            return { ...state, mulflag: !state.mulflag }
        }
        default: return state
    }
}

export default reducer
