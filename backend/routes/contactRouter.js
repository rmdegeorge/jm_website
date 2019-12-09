const express = require("express");
const contactRouter = express.Router();
const nodemailer = require('nodemailer');
const creds = require('../config.js');

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Server is ready to take messages');
  };
});

contactRouter.post("/", (req,res,next) => {
  const {firstName,lastName,email,phone,subject,message} = req.body;
  const mail = {
    from: `${firstName} ${lastName}`,
    to: 'robdegeorgedev@gmail.com',
    subject: `NEW MESSAGE via jaspermoonwellness.com Contact Form. Subject: ${subject}`,
    text: `
      From: ${fristName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message:
      ${message}`
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      });
    } else {
      res.json({
        status: 'success'
      });
    };
  });
});

module.exports = contactRouter;
