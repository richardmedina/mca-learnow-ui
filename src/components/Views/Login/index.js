import React from 'react'
import { Form, Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import Logo from '../../common/logo'

import styles from './styles.module.css'
import { authenticate } from '../../../store/actions/index'
import { PropTypes } from 'prop-types'

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    onLoginButtonClicked = e => {
        const { username, password } = this.state
        const { onOkClicked } = this.props

        onOkClicked(username, password)
    }

    onCreateButtonClicked = e => {}

    handleChange = event => {
        const { onStateChanged } = this.props
        const { name, value } = event.target
        this.setState({
            [name]: value
        }, () => {
            onStateChanged(
                this.state.username,
                this.state.password
            )
        });

        

    }

    handlePasswordKeyDown = e => {
        if (e.key === 'Enter') {
            const { username, password } = this.state
            const { onOkClicked } = this.props
            onOkClicked(username, password)
          }
    }

    render () {
        const { username, password } = this.state

        return (
            <div className={ styles.login }>
                {/* <h1>Login to our site</h1> */}
                <Logo size="small" />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            autoFocus
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
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={ this.handleChange } 
                            onKeyUp={this.handlePasswordKeyDown}
                            />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    {/* <ButtonToolbar>
                        <Button variant="primary" type="button" onClick={ this.onLoginButtonClicked }>
                            Login
                        </Button>
                        <Button variant="success" type="button" onClick={ this.onCreateButtonClicked }>
                            Create
                        </Button>    
                    </ButtonToolbar> */}
                </Form>
            </div>
        )
    }
}

Login.propTypes = {
    onOkClicked: PropTypes.func,
    onStateChanged: PropTypes.func
}

Login.defaultProps = {
    onOkClicked: (username, password) => {},
    onStateChanged: (username, password) => {}
}


export default Login
