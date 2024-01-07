const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Choose any port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message, captcha } = req.body;

    // Validate the captcha (you may want to do additional validation)
    if (!captcha) {
        return res.status(400).json({ success: false, message: 'Captcha validation failed' });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techmo148@gmail.com', // Replace with your Gmail email
            pass: 'Dev@9425116041' // Replace with your Gmail password
        }
    });

    // Setup email data
    const mailOptions = {
        from: 'techmo148@gmail.com', // Replace with your Gmail email
        to: 'info@techmopipe.in', // Replace with your email to receive submissions
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Error sending email', error });
        }
        res.status(200).json({ success: true, message: 'Email sent successfully', info });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
