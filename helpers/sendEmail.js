const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (user) => {
  const { email, verifyToken } = user;

  const msg = {
    to: email,
    from: "lunatiq86@gmail.com",
    subject: "Confirm user registration",
    text: "Not use html",
    html: `
    <a href="http://localhost:3000/api/users/verify/${verifyToken}">Enter for registration confirm</a>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
