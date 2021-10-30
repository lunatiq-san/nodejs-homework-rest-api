const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { sendEmail } = require("../../helpers");

const saltRounds = 10;

const addUser = async (email, password) => {
  const avatarURL = gravatar.url(email);
  const verifyToken = v4();
  const user = new User({
    email,
    password: await bcrypt.hash(password, saltRounds),
    avatarURL,
    verifyToken,
  });
  await user.save();
  await sendEmail(user);
};

module.exports = addUser;
