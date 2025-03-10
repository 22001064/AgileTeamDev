import React from 'react';
import './ribbon.css';

const Ribbon = () => {
    return (
        <div className="ribbon-area">
            {/*Grid container*/}
            <div className="ribbon">
                {/*Grid row*/}
                <div className="row">                      
                    {/*Grid column*/}
                    <div className="col-md-12 mb-md-0">
                        <h4 className='pt-3 pb-2' id="ribbontext">
                            NestCafe
                        </h4>                       
                    </div> 
                    {/*Grid column*/}                          
                </div>
                {/*Grid row*/}
            </div>
            {/*Grid container*/}            
        </div>
    );
}
export default Ribbon;