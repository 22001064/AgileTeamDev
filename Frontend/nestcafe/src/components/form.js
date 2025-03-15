import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const UserForm = () => {
    const [validated, setValidated] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    

    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();            
            // Show the alert            
        } else {            
            setFormSubmitted(true);
            alert('Form is submitted successfully!');            
        }
        setValidated(true);        
    };

    return (
    <>           
        <div className='form-area rounded'>            
            <div className='mt-4 me-4 mx-4 pb-4 auto'>
                <Tabs
                    defaultActiveKey="user"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                <Tab eventKey="user" title="User">  
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>                    
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">                            
                                    <Form.Control required type="email" placeholder="name@example.com" />                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your email address.
                                    </Form.Control.Feedback> 
                                </FloatingLabel>
                            </Form.Group>
                        </Row> 
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <FloatingLabel controlId="floatingInput" label="Password" className="mb-2">                            
                                    <Form.Control required type="text" placeholder="Last name" />                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                    Please provide your password.
                                    </Form.Control.Feedback>                                          
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                        </Row>                                  
                        <Button variant='outline-dark' size='lg' type="submit" id='loginbtn'>Login</Button>                    
                    </Form>
                </Tab>
                <Tab eventKey="admin" title="Admin">
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>                    
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Email</Form.Label>
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">                            
                                    <Form.Control required type="email" placeholder="name@example.com" />                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide your email address.
                                    </Form.Control.Feedback> 
                                </FloatingLabel>
                            </Form.Group>
                        </Row> 
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <FloatingLabel controlId="floatingInput" label="Password" className="mb-2">                            
                                    <Form.Control required type="text" placeholder="Last name" />                       
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                    Please provide your password.
                                    </Form.Control.Feedback>                                          
                                </FloatingLabel>
                            </Form.Group>                            
                        </Row>                                  
                        <Button variant='outline-dark' size='lg' type="submit" id='loginbtn'>Login</Button>                    
                    </Form>
                </Tab>
            </Tabs>                
        </div> 
     </div>   
    </>         
    );
}
export default UserForm