const express = require('express');

const nodeMailerRouter= require('./nodeMailer');

const app = express();

app.use('/email-me', nodeMailerRouter);

module.exports = app;