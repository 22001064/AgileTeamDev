// components/button.js

import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttonbrn = ({ title, onClick }) => {
  return (
    <div className='brownbtn'>
      <Button
        variant='outline-dark'
        size='lg'
        type="button"
        id='loginbtn'
        onClick={onClick}  
      >
        {title}
      </Button>
    </div>
  );
};
 
export default Buttonbrn;


// changed component from:

// const Buttonbrn = ({title, link, onClick}) => {
//     return (
//             <div className='brownbtn'>       
//                 <Button variant='outline-dark' 
//                 size='lg' href={link} 
//                 type="button" 
//                 id='loginbtn'>{title} 
//                 onClick={onClick}
//                 </Button> 
//             </div>                     
//     );
// }
// export default Buttonbrn