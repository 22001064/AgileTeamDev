import React from 'react';
import Header from '../../Components/header';
import UserForm from '../../Components/form';

const Login = () => {
  return (
    <>        
        <Header title={"Login"} curPage={"Login"}/>
        <div className='image'>
            <img src="./src/assets/nestcafelogolong.png?raw=true" alt="Company logo" className='rounded' id='loginlogo'/>
        </div>
        <UserForm/>
        
    </>
  );
}
export default Login