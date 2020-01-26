import React from 'react'
import { Form, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

import { connect } from 'react-redux'

import Logo from '../../common/logo'

import styles from './styles.module.css'
import { authenticate } from '../../../store/actions/index'

class Login extends React.Component {

    static contextType = AppContext
    state = {
        username: "",
        password: ""
    }

    onLoginButtonClicked = e => {
        const { username, password } = this.state
        const { authenticate } = this.props
        authenticate(username, password)
    }

    onCreateButtonClicked = e => {
        const { 
            getUsers
        } = this.context.Api

        getUsers ();
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    // componentDidMount ()
    // {
    //     const { isLogged, history } = this.props
    //     console.log("Redirectiong to root")
    //     //if (isLogged) history.push("/")
    // }

    render () {
        const { username, password } = this.state
        const { isLogged, history } = this.props

        return (
            <div className={ styles.login }>
                <h1>Login to our site</h1>
                <Logo size="small" />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="username"
                            value={username}
                            onChange={ this.handleChange } />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={ this.handleChange } />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <ButtonToolbar>
                        <Button variant="primary" type="button" onClick={ this.onLoginButtonClicked }>
                            Login
                        </Button>
                        <Button variant="success" type="button" onClick={ this.onCreateButtonClicked }>
                            Create
                        </Button>    
                    </ButtonToolbar>
                    
                    <div>
                        <small>
                            You don't have an account yet?, <Link to="/register">create</Link> a new account
                        </small>
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogged: state.login.isLogged
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (username, password) =>
            dispatch(authenticate(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)