const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.SMTP_Username,
//     pass: process.env.SMTP_Password,
//   },
// });

// app.post('/email-me', (req, res) => {
//   const mailOptions = {
//     from: process.env.SMTP_Username,
//     to: process.env.SMTP_Username,
//     subject: 'Portfolio Contact Form',
//     text: 'That was easy!',
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);