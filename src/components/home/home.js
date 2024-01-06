import './home.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
        <>
            <div className="home">
            <div className="home-content">
                <h1> Welcome to TechMo </h1>
                <p> Your one stop shop for all your tech needs </p>
                <Link to="/products"> <button> Shop Now </button> </Link>
            </div>
            </div>
        </>
        )
    }
}
export default Home