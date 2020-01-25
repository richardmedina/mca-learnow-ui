import React from 'react'
import { 
    Navbar,
    Nav,
    NavDropdown 
}
from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.css'
import { connect } from 'react-redux'

class MainMenubar extends React.Component {
    render ()
    {
        const { isLogged } = this.props

        console.log ("PROPS: ", this.props)

        return isLogged ? (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={styles["main-menu-bar"]}>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/features">Features</Nav.Link>
                    <Nav.Link as={Link} to="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        ):
        <React.Fragment />
    }
}

const mapStateToProps = state =>{
    console.log ("Asigning state: ", state)
    return {
        isLogged: state.login.isLogged
    }
}

export default connect(mapStateToProps, null) (MainMenubar)