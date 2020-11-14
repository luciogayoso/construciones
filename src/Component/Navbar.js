import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{color:'white',fontFamily: 'Dancing Script, cursive'}} href="#!">Constructor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#!">Inicio</Nav.Link>
                    <Nav.Link href="#!">Trabajos</Nav.Link>
                    <Nav.Link href="#!">Contactenos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;