import React from 'react';
import Header from '../../Components/header';
import UserForm from '../../Components/form';
import Buttonbrn from '../../Components/button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  return (
    <>        
        <Header title={"Login"} curPage={"Login"}/>
        <Container className='login-container'>
          <Row>
            <Col lg={4}>
              <div className='image1'>
                <img src="./src/assets/lamp.png" className='rounded' alt="team work" id='teamwork'/>
              </div>      
            </Col>
            <Col className='login-form' lg={4}>
              <div className='image'>
                <img src="./src/assets/nestcafelogolong.png?raw=true" alt="Company logo" className='rounded' id='loginlogo'/>
              </div>            
              <UserForm/>            
              <div className='buttons-area'>
                <div className='row' id='btn-row2'>
                  <div className='left col-lg-6'>
                    <Buttonbrn title={"Forgot password"}/>
                  </div>
                  <div className='right col-lg-6'>
                    <Buttonbrn title={"Privacy policy"}/>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className='image2 '>
                <img src="./src/assets/teammanagement.png" className='rounded' alt="team work" id='teamwork'/>
              </div>             
            </Col>
          </Row>
        </Container>             
    </>
  );
}
export default Login