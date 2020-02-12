import React from 'react'
import { Route } from 'react-router-dom'
import FreeSite from '../views/free-site'

import { connect } from 'react-redux'

const View = ({ children, isLogged, history }) =>
        !isLogged
            ? <FreeSite />
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