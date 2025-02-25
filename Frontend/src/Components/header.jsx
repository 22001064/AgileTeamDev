import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = ({title, curPage}) => {
  return (
    <div className="pageheader-main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="pageheader-content text-align-center text-center">
                            <h2><b>{title}</b></h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link className="link text-black" to="/nestcafe/">Home</Link></li>                                    
                                    <li className="breadcrumb-item active text-black" aria-current="page">{curPage}</li>                                    
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Header