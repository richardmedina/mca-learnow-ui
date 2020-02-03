import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../views/login'
import FreeSite from '../views/freeSite'

import { connect } from 'react-redux'

const View = ({ children, isLogged, history }) =>
        !isLogged
            ? <Login></Login>
            : <div>
                <Route exact path="/" render={ () => <div>Main Page</div> } />
                {/* <Route exact path="/login" component={Login} /> */}
                <Route exact path="/about" render={ () => <div>About</div> } />
            </div>

const mapStateToProps = state => {
    return {
        isLogged: state.login.isLogged
    }
}

export default connect(mapStateToProps, null)(View)