const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const saltRounds = 10;

const addUser = async (email, password) => {
  const avatarURL = gravatar.url(email);
  const user = new User({
    email,
    password: await bcrypt.hash(password, saltRounds),
    avatarURL,
  });
  await user.save();
  return user;
};

module.exports = addUser;
