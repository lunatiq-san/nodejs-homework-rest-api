const registration = require("./addUser");
const loginUser = require("./loginUser");
const getUserByEmail = require("./getUserByEmail");
const addUser = require("./addUser");
const getUserById = require("./getUserById");
const logoutUser = require("./logoutUser");
const updateAvatar = require("./updateAvatar");
const repeatSendEmailVerify = require("./repeatSendEmailVerify");

module.exports = {
  registration,
  getUserByEmail,
  loginUser,
  addUser,
  getUserById,
  logoutUser,
  updateAvatar,
  repeatSendEmailVerify,
};
