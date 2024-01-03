
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


export class navbar extends Component {
  

 

  render() {
    return (
          <>  
         
          <div aria-hidden="true "></div>
        <nav   className="navbar navbg fixed-top navbar-expand-lg  text-dark bg-dark navbar-dark" id=''>
        <div className="container-fluid  my-2">
          <img className = "techmo" src='C:\Coding\techmo\src\components\logo.png' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="items">
              <li className="nav-item">
                <Link className="list" aria-current="page" to="/register">Products</Link>
              </li>
              
              <li className="nav-item">
                <Link className="list" to="/business">Area of operations</Link>
              </li>
              <li className="nav-item">
                <Link className="list" to="/contact">Contact Us</Link>
              </li>
              
            </ul>
            
            

            
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default navbar