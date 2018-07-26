import message from './message.js'
import uistate from './uistate.js'
import { combineReducers } from 'redux'

export default combineReducers({
    message,
    uistate
})