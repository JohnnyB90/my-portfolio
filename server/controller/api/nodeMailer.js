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
    user: process.env.Email,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});


nodeMailer.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: 'test@gmail.com',
    to: process.env.Email,
    subject: `Portfolio Contact Form - Message from ${name}`,
    text: `Message from: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
  };
  
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

module.exports = nodeMailer;
