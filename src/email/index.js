var nodemailer = require('nodemailer');


var senderGmail = 'user@gmail.com';
var senderPasswd = 'pass';
var receiverEmail = 'user@example.com';

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: senderGmail,
    pass: senderPasswd,
  }
});

var mailOptions = {
  from: senderGmail,
  to: receiverEmail,
  subject: 'Sending test email using Node.js',
  text: 'Good!'
};

transporter.sendMail(mailOptions, function (err, info) {
  if(err) {
    console.log(err);
  }
  else {
    console.log('Email sent!');
    console.log(info.response);
    console.log(info.accepted);
  }
});