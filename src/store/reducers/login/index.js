import { LOGIN_SUCCEED } from '../../actions/actionTypes'


const initialState = {
    isLogged: false,
    auth: null
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case LOGIN_SUCCEED:
            return {
                state,
                isLogged: true,
                auth: action.payload
            }
    }

    return state;
}
