import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '', message: '', captcha: '' };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCaptchaChange = (value) => {
        this.setState({ captcha: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <div className='contact'>
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' placeholder='Your Name' onChange={this.handleInputChange} required />
                    <input type='email' name='email' placeholder='Your Email' onChange={this.handleInputChange} required />
                    <input type='tel' name='phone' placeholder='Your Phone Number' onChange={this.handleInputChange} required />
                    <textarea name='message' placeholder='Your Message' onChange={this.handleInputChange} required />
                    <ReCAPTCHA sitekey='6LfzgEgpAAAAAGE34GHY-SgsUu9Y1GvuAGZaPtIF' onChange={this.handleCaptchaChange} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default Contact