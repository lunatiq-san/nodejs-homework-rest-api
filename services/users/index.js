const registration = require("./addUser");
const loginUser = require("./loginUser");
const getUserByEmail = require("./getUserByEmail");
const addUser = require("./addUser");
const getUserById = require("./getUserById");

module.exports = {
  registration,
  getUserByEmail,
  loginUser,
  addUser,
  getUserById,
};
