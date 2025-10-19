require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER, // send to yourself
  subject: "Test Email",
  text: "This is a test email from Node.js",
}, (err, info) => {
  if (err) {
    console.log('Send Error:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});
