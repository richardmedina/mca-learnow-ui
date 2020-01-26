
import Api from '../../libs/LearnowApi'
import { LOGIN_SUCCEED } from './actionTypes'


export const authenticate = (username, password) =>
    dispatch => Api.auth.authenticate(username, password)
        .then(response => dispatch({
            type: LOGIN_SUCCEED,
            payload: response.data
        }))
