
import Api from '../../libs/LearnowApi'
import { APP_LOGIN_SUCCEED } from './actionTypes'


export const authenticate = (username, password) =>
    dispatch => Api.auth.authenticate(username, password)
        .then(response => dispatch({
            type: APP_LOGIN_SUCCEED,
            payload: response.data
        }))


export const logout = () =>
        dispatch => dispatch({
            type: "APP_LOGOUT"
        })