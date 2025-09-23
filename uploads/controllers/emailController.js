const transporter = require('../config/emailConfig');

exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
    res.send('Email sent successfully');
  } catch (err) {
    res.status(500).send('Error sending email: ' + err.message);
  }
};
