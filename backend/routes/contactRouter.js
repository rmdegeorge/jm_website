const express = require("express");
const contactRouter = express.Router();
const nodemailer = require('nodemailer');
require("dotenv").config()

const transport = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
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
  // console.log(req.body);
  const mail = {
    from: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>`,
    to: `jaspermoonwellness@gmail.com`,
    subject: `NEW MESSAGE via jaspermoonwellness.com Contact Form. Subject: ${req.body.subject}`,
    text: `
      From: ${req.body.fristName} ${req.body.lastName}
      Email: ${req.body.email}
      Phone: ${req.body.phone}
      Message:
      ${req.body.message}`
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
