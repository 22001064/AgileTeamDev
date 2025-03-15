import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Buttonbrn = ({title, link}) => {
    return (
            <div className='brownbtn'>       
                <Button variant='outline-dark' 
                size='lg' href={link} 
                type="submit" 
                id='loginbtn'>{title} 
                </Button> 
            </div>                     
    );
}
export default Buttonbrn