require('dotenv').config();
const { faGlassMartiniAlt } = require('@fortawesome/free-solid-svg-icons');
const nodemailer = require('nodemailer');

const smtpTransporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    // user: process.env.DB_EMAIL,
    // pass: process.env.DB_EMAIL_PASS,
    user: 'consultasdrdanieltrabulo@gmail.com',
    pass: 'danieltrabulo1+'
  },
});

const sendPassNodemailer = (req, res, next) => {
  const mailOptions = {
    // from: `Dr Daniel Trabulo <${process.env.DB_EMAIL}>`,
    from: 'Dr Daniel Trabulo <consultasdrdanieltrabulo@gmail.com>',
    to: `${req.email}`,
    subject: `Site Dr Daniel Trabulo Backoffice - Alteração Password`,
    text: `Código a inserir para alterar password: ${req.hash}`,
    html: `Código a inserir para alterar password: ${req.hash}`,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      req.errorMessage = error.message;
    } else {
      req.successMessage = 'Sent';
    }
    smtpTransporter.close();
    // next();
  });
};

module.exports = sendPassNodemailer;
