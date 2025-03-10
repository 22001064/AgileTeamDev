import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navigationBar.css";

const NavigationBar = () => {
    return (
        <Navbar expand="lg" sticky="top" className='nav-area'>
            <Container>
                <Navbar.Brand href="/"><img src="../images/logo.png" className='rounded' alt="Company logo" id="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end flex-grow-1 pe-4" id='links'>
                            <Nav.Link className='link' href="/">Home</Nav.Link>
                            <Nav.Link className='link' href="/nestcafe/login">Login</Nav.Link>
                            <img src="/images/customer-service-support.svg" alt="Support icon"  id='supportlogo'/>
                            <Nav.Link className='link' href="#">Support</Nav.Link>                                                         
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}  
export default NavigationBar;