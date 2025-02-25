import React from 'react';
import { FaFacebookF, FaHome, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
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
                        <h6 className='pt-4 pb-3'>
                            Here can be your nice company Slogan
                        </h6>
                        {/*Section: Social media*/}
                        <section className="mb-4">
                            {/*Facebook*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#3b5998"}}
                                href="#!"
                                role="button"
                                id="social"
                                ><FaFacebookF/>
                            </a>
                            {/*Twitter*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#333333"}}
                                href="#!"
                                role="button"
                                id="social"
                            ><b>X</b></a>

                            {/*Instagram*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#ac2bac"}}
                                href="#!"
                                role='button'
                                id="social"
                                ><FaInstagram/></a>

                            {/*Linkedin*/}
                            <a
                                className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#0082ca"}}
                                href="#!"
                                role='button'
                                id="social"
                                ><FaLinkedinIn/></a>
                        </section>
                        {/*Section: Social media*/}
                    </div>
                    {/*Grid column*/}                    
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold">Site Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li className='link'>
                                <a href="/nestcafe/" className="text-black">Home</a>
                            </li>
                            <li className='link'>
                                <a href="/nestcafe/login" className="text-black">Login</a>
                            </li>
                            <li className='link'>
                                <a href="/nestcafe/tasks" className="text-black">Tasks</a>
                            </li>                            
                        </ul>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                        <h6 className="text-uppercase fw-bold">Other Links</h6>
                        <ul className="list-unstyled mb-0">
                            <li className='link'>
                                <a href="https://www.costa.co.uk/" target='_blank' className="text-black">Our partners</a>
                            </li>                            
                        </ul>
                    </div>
                    {/*Grid column*/}
                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">          
                        <h6 className="text-uppercase fw-bold mb-1">Contact</h6>
                        
                        <p><FaHome /> 53 Cowgate, Peterborough, UK</p>
                        <p><FaEnvelope/> info@netscafe.co.uk </p>
                        <p><FaPhone/> 01733 312546</p>
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