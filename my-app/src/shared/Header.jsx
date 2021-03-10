import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";


const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Posts</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Account" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="login">LogIn</NavDropdown.Item>
                            <NavDropdown.Item href="signup">SignUp</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="logout">LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header;