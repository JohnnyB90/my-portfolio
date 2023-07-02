const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'YourEmailServiceProvider',
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});


app.post('/email-me', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'your-recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}/`);
});
