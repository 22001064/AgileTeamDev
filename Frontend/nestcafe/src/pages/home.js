import React from 'react';
import Ribbon from '../components/ribbon';
import Buttonbrn from '../components/button';

const Home = () => {
  return (
    <>        
        <Ribbon/>
        <div className='homeimage'>
            <img src="/images/team-management.png" alt="Team high five" className='rounded' id='team'/>
        </div>
        <div className='buttons-area'>
          <div className='row' id='btn-row'>
            <div className='left col-lg-6'>
              <Buttonbrn title={"Login"} link={"/nestcafe/login"}/>
            </div>
            <div className='right col-lg-6'>
              <Buttonbrn title={"Support"}/>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home