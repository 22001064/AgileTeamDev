import React, { useState } from 'react';
import Header from '../components/header';
import UserForm from '../components/form';
import Buttonbrn from '../components/button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import Modal and Button for the popup
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Login = () => {
  // State to show/hide the modal
  const [showModal, setShowModal] = useState(false);

  // Handlers to open and close the modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>        
      <Header title="Login" curPage="Login" />
      <Container className='login-container'>
        <Row>
          <Col lg={4}></Col>
          <Col className='login-form' lg={4}>
            <div className='image' id="loginlogo">
              <img
                src="/images/nestcafelogolong.png?raw=true"
                alt="Company logo"
                className='rounded'
                id='loginlogo'
              />
            </div>

            <UserForm />

            <div className='buttons-area'>
              <div className='row' id='btn-row2'>
                <div className='left col-lg-6'>
                  <Buttonbrn title="Forgot password" />
                </div>
                <div className='right col-lg-6'>
                  {/* Use handleShow to open the modal when clicked */}
                  <Buttonbrn title="Privacy policy" onClick={handleShow} />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>

      {/* The Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {/* Place your privacy policy text here */}
            This is our Privacy Policy. We value your privacy and we defeinitely dont sell your data to the chinese
          </p>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button for the modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
