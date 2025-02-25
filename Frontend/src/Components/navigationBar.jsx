import React from 'react';
import './navigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" sticky="top" className='nav-area'>
            <Container>
                <Navbar.Brand href="/nestcafe/"><img src="./src/assets/logo.png" className='rounded' alt="Company logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end flex-grow-1 pe-4" id='links'>
                            <Nav.Link className='link' href="/nestcafe/">Home</Nav.Link>
                            <Nav.Link className='link' href="/nestcafe/login">Login</Nav.Link>                                                         
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}  
export default NavigationBar;