import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { isDropdownOpen } = this.state;

    return (
      <>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
          <div className="dropdown-icon" onClick={this.toggleDropdown}>
            &#9776; {/* Unicode hamburger icon */}
          </div>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
