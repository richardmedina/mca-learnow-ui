import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Views/Login'

import { connect } from 'react-redux'

const Content = ({ children, isLogged }) =>
    !isLogged ?
        <Login />
    : 
        <div>
            <Route exact path="/" render={ () => <div>Main Page</div> } />
            <Route exact path="/login" component={Login} />
            <Route path="/about" render={ () => <div>About</div> } />
        </div>


const mapStateToProps = state => {
    return {
        login: state.login.isLogged
    }
}

export default connect(mapStateToProps, null)(Content)