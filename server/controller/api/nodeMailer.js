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
    user: 'bonee.johnny@gmail.com',
    clientId: '486827120815-pj0ugn82d93lgshag0phnk4cf702s6cc.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken: '1//04IB07OqYt52HCgYIARAAGAQSNwF-L9IrDfoY1ZsGQobjRXoXNeZBMWU5HtXtNWnakGRdp7fClSsthsBHnArvx3ecRpeYoNStxwU'
    ,
  },
});


nodeMailer.post('/', async (req, res) => { 
  console.log('hit /api/email-me');
  const { name, email, phone, message } = req.body;
  const mailOptions = {
    from: `${email}`,
    to: 'bonee.johnny@gmail.com',
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
