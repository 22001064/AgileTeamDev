import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
  // State to control the Support modal
  const [showSupportModal, setShowSupportModal] = useState(false);

  // Handlers to open/close the modal
  const handleSupportShow = () => setShowSupportModal(true);
  const handleSupportClose = () => setShowSupportModal(false);

  return (
    <>
      <Navbar expand="lg" sticky="top" className='nav-area'>
        <Container>
          <Navbar.Brand href="/">
            <img 
              src="../images/logo.png"
              className='rounded'
              alt="Company logo"
              id="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-4" id='links'>
              
              <img
                src="/images/customer-service-support.svg"
                alt="Support icon"
                id='supportlogo'
              />
              {/* Use onClick to open the modal */}
              <Nav.Link className='link' onClick={handleSupportShow}>
                Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Support Modal */}
      <Modal show={showSupportModal} onHide={handleSupportClose}>
        <Modal.Header closeButton>
          <Modal.Title>Support</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            For assistance, please contact us at: 
            <strong> support@fakeemail.com</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSupportClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavigationBar;
