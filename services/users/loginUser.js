const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const getUserByEmail = require("./getUserByEmail");

const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Unauthorized(`User with email: ${email} not found`);
  }

  if (!user.verify) {
    throw new Unauthorized("Email not verify");
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) {
    throw new Unauthorized("Wrong password");
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  );

  await User.findByIdAndUpdate(user._id, { token }, { new: true });
  return token;
};

module.exports = loginUser;
