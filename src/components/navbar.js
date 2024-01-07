
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './logo.png'



export class navbar extends Component {
  

 

  render() {
    return (
          <>
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
              </ul>
            </div>
            
          </div>
        </>
    )
  }
}

export default navbar