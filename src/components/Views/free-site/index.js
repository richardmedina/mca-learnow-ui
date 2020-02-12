import React from 'react'
import Logo from '../../common/logo'
import AnimatedMenu from '../../common/animatedMenu'
import styles from './styles.module.css'
//import Login from '../login'

import { connect } from 'react-redux'
import { authenticate } from '../../../store/actions/index'

import { Button, Modal } from 'react-bootstrap'

const Login = React.lazy(() => import(/* webpackChunkName: "myLogin" */'../login'))

const items = [
    {
        text: "Find a Partner",
        href: "#"
    },
    {
        text: "Ask a Question",
        href: "#"
    },
    {
        text: "Speaking Room",
        href: "#"
    },
]

class FreeSite extends React.Component {

    state = {
        showLoginForm: false,
        username: "", 
        password: ""
    }

    handleLoginClick = () => {
        console.log("showing login form")
        this.setState({
            showLoginForm: true
        })
    }

    renderLoginForm () {
        return <Login />
    }

    handleLoginOkClicked = () => {
        const { authenticate } = this.props
        const { username, password } = this.state
        authenticate(username, password)
    }
    
    handleClose = () => {
        this.setState({
            showLoginForm: false
        })
    }

    onLoginStatechanged = (username, password) => {
        this.setState({
            username,
            password
        })
    }

    render() {
        const { showLoginForm } = this.state

        return (
            <div className={ styles.main }>
                <div className={ styles["main-bar"] }>
                    <div className={ styles["left-bar"] }>
                    <a href="">
                            <Logo />
                        </a>
                        <AnimatedMenu items={ items }></AnimatedMenu>
                    </div>
                    <div className={ styles["right-bar"] }>
                        {/* <input type="text" placeholder="Find a partner" /> */}
                        <Button type="button" onClick={ this.handleLoginClick }>Login</Button>
                    </div>
                </div>
                <div className="container">
                { 
                    showLoginForm
                        && 
                        <Modal show={ showLoginForm } onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login to our site</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <React.Suspense
                                    fallback={<h1>Loading Login...</h1>}>
                                    <Login 
                                        //onOkClicked={ this.handleLoginOkClicked }
                                        onStateChanged={ this.onLoginStatechanged }
                                        /> 
                                </React.Suspense>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={ this.handleClose }>Close</Button>
                                <Button variant="success" onClick={ this.handleLoginOkClicked }>Start Session</Button>
                            </Modal.Footer>
                        </Modal>
                }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (username, password) =>
            dispatch(authenticate(username, password))
    }
}

export default connect(null, mapDispatchToProps)(FreeSite)
