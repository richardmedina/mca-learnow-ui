import React from 'react'
import { shallow } from 'enzyme'
import { Login } from './index'
import { PropTypes } from 'prop-types'

describe('Login component tests', () => {
    it('Expect to render Login Component ', () => {
        const props = {
            authenticate: (username, password) => {},
            isLogged: false
        }
        
        const wrapper = shallow(
            <Login { ...props }/>
        )
        var html = wrapper.debug()
        
        expect(html).toMatchSnapshot()
    })
})