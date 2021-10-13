const getUserByEmail = require("./getUserByEmail");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const loginUser = async (email, password) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Unauthorized(`User with email: ${email} not found`);
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

  await User.findOneAndUpdate({ _id: user._id }, { new: true });
  // return { token, updateUser };
  return token;
};

module.exports = loginUser;
