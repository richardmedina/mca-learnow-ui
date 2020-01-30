import { shallow, mount, render} from 'enzyme'
import React from 'react'
import Header from './index'

it('expect to render Header component', () => {
    //expect(shallow(<Header />).length).toEqual(1)
    
    expect(shallow(<Header />).debug())
        .toMatchSnapshot()
})
