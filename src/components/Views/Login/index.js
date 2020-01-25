import React from 'react'
import { Form, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/AppContext'

import Logo from '../../common/logo'

import styles from './styles.module.css'

class Login extends React.Component {

    static contextType = AppContext
    state = {
        username: "",
        password: ""
    }

    onLoginButtonClicked = e => {
        const { username, password } = this.state
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

    render () {
        const { username, password } = this.state

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
                    <div>
                        Prop1: { this.context.property1 }
                        <br></br>
                        Prop2: { this.context.property2 }
                    </div>
                </Form>
            </div>
        )
    }
}

export default Login