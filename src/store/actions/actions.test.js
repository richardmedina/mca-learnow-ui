import * as actions from './index'
import { APP_LOGOUT, APP_LOGIN_SUCCEED, APP_LOGIN_FAILED } from './actionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'


describe("Actions tests", () => {
    
    const mockStore = configureMockStore([thunk])

    it("Should return APP_LOGOUT action", () => {
        var expectedAction = {
            type: APP_LOGOUT
        }

        expect(actions.logout()).toEqual(expectedAction);

    })

    it('Shoult return APP_LOGIN_FAILED action', () => {
        const store = mockStore({})

        const expectedAction= {
            type: APP_LOGIN_FAILED
        }

        return store.dispatch(actions.authenticate('richard', 'medina'))
            .then(() => {
                const action = store.getActions()
                expect(action[0]).toEqual(expectedAction)
            })
    })
})