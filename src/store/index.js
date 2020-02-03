import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {

}

export default createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware))
