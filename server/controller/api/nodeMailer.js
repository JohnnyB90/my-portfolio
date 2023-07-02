require('dotenv').config();
const nodeMailer = require('express').Router();
const nodeMailerHandler = require('nodemailer');
const cors = require('cors');
nodeMailer.use(cors());

// Nodemailer setup
const transporter = nodeMailerHandler.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});


nodeMailer.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.Email,
    subject: `Portfolio Contact Form - Message from ${name}`,
    text: `Message from: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

module.exports = nodeMailer;
