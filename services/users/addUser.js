const { User } = require("../../models");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

const addUser = async (email, password) => {
  const user = new User({
    email,
    password: await bcrypt.hash(password, saltRounds),
  });
  await user.save();
  return user;
};

module.exports = addUser;
