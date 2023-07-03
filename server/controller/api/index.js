const router = require('express').Router();
const nodeMailerRouter= require('./nodeMailer');



router.use('/email-me', nodeMailerRouter);

module.exports = router;