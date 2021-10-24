const { User } = require("../../models");

const updateAvatar = async (userId, avatarURL) => {
  const user = await User.findByIdAndUpdate(userId, { avatarURL });
  return user.avatarURL;
};

module.exports = updateAvatar;
