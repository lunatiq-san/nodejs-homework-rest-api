const { NotFound } = require("http-errors");
const sgMail = require("@sendgrid/mail");
const { User } = require("../../models");
require("dotenv").config();

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const verify = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verifyToken: verificationToken });
  if (!user) {
    throw new NotFound();
  }
  await User.findByIdAndUpdate(user._id, {
    verifyToken: null,
    verify: true,
  });

  res.json({
    status: "success",
    code: 200,
    message: "Email success verify",
  });
};

module.exports = verify;
