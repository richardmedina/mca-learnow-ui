import React from 'react'
import { Form, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    onLoginButtonClicked = e => {
        console.log("Login to user account")
    }

    onCreateButtonClicked = e => {
        console.log("Creating user account")
    }

    render () {
        return (
            <div>
                <h1>Login to our site</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
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

export default Login