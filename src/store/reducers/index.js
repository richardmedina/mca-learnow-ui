import { combineReducers } from 'redux'
import loginReducer from './login'

const defaultReducer = (state = {}, action) => {
    console.log("Executing Reducer: ", action);
    return state
}

export default combineReducers ({
    default: defaultReducer,
    login: loginReducer
})
