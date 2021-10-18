const { User } = require("../../models");

const logoutUser = async (userId) => {
  await User.findByIdAndUpdate(userId, { token: null });
};

module.exports = logoutUser;
