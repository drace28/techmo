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

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, phone, message, captcha } = this.state;

        // Validate form fields (you may want to add more validation)
        if (!name || !email || !phone || !message || !captcha) {
            alert('Please fill in all fields and complete the captcha.');
            return;
        }
        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message, captcha }),
            });

            const data = await response.json();

            if (data.success) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
        
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