import React from 'react';
import styles from "../Component/css/navBar.module.css";
import * as Icon from 'react-bootstrap-icons';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {

    document.addEventListener("DOMContentLoaded", function () {
        let mybutton = document.getElementById("myBtn");

        
        window.onscroll = function () { scrollFunction() };


        function scrollFunction() {
            
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
        
    });
   
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0; 
    }

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
            <button onClick={topFunction} id="myBtn" className={styles.myBtn} title="Go to top"><Icon.ArrowUp /></button>
        </Navbar>
    )
}

export default NavBar;