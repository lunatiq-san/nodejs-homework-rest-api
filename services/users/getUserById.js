const { User } = require("../../models");

const getUserById = async (id) => {
  const user = await User.findOne({ _id: id });

  if (!user) {
    return false;
  }
  return user;
};

module.exports = getUserById;
