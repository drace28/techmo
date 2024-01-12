
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import banner from './assests/banner.jpg';
import expertise from './assests/expertise.jpg';
import quality from './assests/quality.jpg';
import './home.css';
import Footer from '../footer/footer';
export class Home extends Component {
    render() {
        return (
        <>
            <div className="home">
            <div className="banner">
                <center><img src={banner}></img></center>
            </div>
            <center><section className='content'>
            <div className="home-text">
                <center><h1>About <span class = "about-t">Techmo</span><span className='about-p'> Pipes & Fittings</span></h1></center>
                <div className='about'>
    <div className='column'>
        <img src={expertise} alt='Expertise'></img>
        <center><h2>Our Expertise</h2></center>
        <p>
            Techmo pipes has over 18 years of experience in the manufacturing industry.
            Our team of experts has the knowledge and expertise to provide our customers with customized solutions to meet their unique needs.
            We specialize in PVC & HDPE pipes.
        </p>
    </div>

    <div className='column'>
        <img src={quality} alt="Quality"></img>
        <center><h2>Quality</h2></center>
        <p>
            We are committed to providing our customers with the highest quality products and services.
            We strive to exceed customer expectations by delivering superior products and services on time, every time.
        </p>
    </div>
</div>

                
            </div>
            </section></center>
            <div style={{ display: "flex" }}>
            <Footer/>
            </div>
            
        </div>
        
        </>
        
        )
    }
}
export default Home