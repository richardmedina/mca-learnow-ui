
import Api from '../../libs/LearnowApi'
import { APP_LOGIN_SUCCEED, APP_LOGIN_FAILED } from './actionTypes'


export const authenticate = (username, password) =>
    dispatch => {
        var promise = Api.auth.authenticate(username, password)
            .then(response => dispatch({
                type: APP_LOGIN_SUCCEED,
                payload: response.data
            }))
            .catch(error => { 
                console.log("Error authenticating: ", error.response)
                return dispatch({
                    type: APP_LOGIN_FAILED
                })
            })
            console.log("Promise: ", promise)
        return promise
    }

export const logout = () => ({
    type: "APP_LOGOUT"
})
