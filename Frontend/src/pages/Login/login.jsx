import React from 'react';
import Header from '../../Components/header';
import UserForm from '../../Components/form';
import Buttonbrn from '../../Components/button';

const Login = () => {
  return (
    <>        
        <Header title={"Login"} curPage={"Login"}/>             
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
    </>
  );
}
export default Login