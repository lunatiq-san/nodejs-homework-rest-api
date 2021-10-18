const { User } = require("../../models");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });

  if (user) {
    return user;
  }
  return false;
};

module.exports = getUserByEmail;
