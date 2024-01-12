import Iframe from 'react-iframe';
import logo from '../logo.png'
import React, {Component} from 'react'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-column">
                <img src={logo}></img>
                    
                </div>
                <div className="footer-column" id='ad'>
                    <h3>Address</h3>
                    <p>Shree Balaji Poly Pipes & Products Pvt. Ltd.<br></br>
                    C-8, Industrial area, Banmore, Morena, Madhya Pradesh, India - 476444<br></br>
                    Phone: +91 9300266525<br></br>
                    Email: info@techmopipe.in</p>
                </div>
                <div className='footer-column'>
                    <h3>Visit us!</h3>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.3437729670544!2d78.08507446107933!3d26.3674953337479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976b715795b60f7%3A0x13059a89cb3e4e3b!2sSHREE%20BALAJI%20POLY%20PIPES%20AND%20PRODUCTS%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1704552247576!5m2!1sen!2sin" 
                    width="300px"
                    height="300px"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    cap
                    />
            </div>
        </div>
    )
}
export default Footer;
