import {
    APP_LOGIN_SUCCEED,
    APP_LOGOUT
} from '../../actions/actionTypes'


const initialState = {
    isLogged: false,
    auth: null
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case APP_LOGIN_SUCCEED:
            return {
                ...state,
                    isLogged: true,
                    auth: action.payload
            }
        case APP_LOGOUT:
            return {
                ...state,
                    isLogged: false,
                    auth: null
            }
    }

    return state;
}
