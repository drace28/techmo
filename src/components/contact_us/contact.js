import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './contact.css';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import emailjs from '@emailjs/browser';
import Footer from '../footer/footer';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      error: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      captcha: '',
    };
    this.formRef = React.createRef();
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCaptchaChange = (value) => {
    this.setState({ captcha: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, message, captcha } = this.state;

    // Check if any of the fields are empty
    const fields = ['name', 'email', 'phone', 'message', 'captcha'];
    for (const field of fields) {
      if (!this.state[field]) {
        this.setState({ error: true, open: true });
        return;
      }
    }

    try {
      const result = await emailjs.sendForm('service_uwbmnm6', 'template_7tjjhcb', this.formRef.current, '9Yz0WO07qCbYKioV9');
      console.log('Email sent successfully', result);

      this.setState({ open: true, error: false, name: '', email: '', phone: '', message: '', captcha: '' });
      this.formRef.current.reset();
    } catch (error) {
      console.log('Email send error:', error);
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open, error } = this.state;

    return (
      <>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>Got any questions about our products or ranges? We're here to help!</p>
        <div className='contact-form'>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <input type="text" name="name" placeholder="Your Name" onChange={this.handleInputChange} required />
          <input type="email" name="email" placeholder="Your Email" onChange={this.handleInputChange} required />
          <input type="tel" name="phone" placeholder="Your Phone Number" onChange={this.handleInputChange} required />
          <textarea name="message" placeholder="Your Message" onChange={this.handleInputChange} required />
          <center>
          <ReCAPTCHA className='ReCAPTCHA' sitekey="6LfzgEgpAAAAAGE34GHY-SgsUu9Y1GvuAGZaPtIF" onChange={this.handleCaptchaChange} />
          </center>
          <button type="button" onClick={this.handleSubmit} className="submitButton">
            Submit
          </button>
        </form>
        <div className='details'>
          <h2>Contact Details</h2>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Hours: Mon-Fri: 9:00 AM - 5:00 PM</p>
        </div>
        </div>
        {open && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={this.handleClose}
              severity={error ? 'error' : 'success'}
            >
              {error ? 'Please fill out all fields' : 'Email sent successfully!'}
            </MuiAlert>
          </Snackbar>
        )}
      </div>
      <Footer/>
      </>
    );
  }
}

export default Contact;
