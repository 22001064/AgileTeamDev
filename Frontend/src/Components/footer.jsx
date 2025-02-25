import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="text-black text-center text-lg-start">
            {/*Grid container*/}
            <div className="container p-4">
                {/*Grid row*/}
                <div className="row">                     
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <div className='longlogo'>
                            <a href='/nestcafe/'><img src="./src/assets/logolong.png?raw=true" className='rounded' alt="Company logo" id='logo'/></a>
                        </div>                                     
                    </div>
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0" id="footertext">
                        <h6 className='text-uppercase fw-bold pt-4 pb-3'>
                            Together we can go higher!
                        </h6>                       
                    </div> 
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold">Site Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li className='link'>
                                <a href="/nestcafe/" className="text-black">Home</a>
                            </li>
                            <li className='link'>
                                <a href="/nestcafe/login" className="text-black">Login</a>
                            </li>                                                   
                        </ul>
                    </div>
                    {/*Grid column*/}                   
                </div>
                {/*Grid row*/}
            </div>
            {/*Grid container*/}

            {/*Copyright*/}
            <div className="text-center p-1">
                <p>© 2025 Copyright: NestCafe Ltd. All rights reserved.</p>
            </div>            
        </footer>
    );
}
export default Footer;