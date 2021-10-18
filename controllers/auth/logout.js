const usersOperations = require("../../services/users");

const logout = async (req, res) => {
  const { _id } = req.user;

  await usersOperations.logoutUser(_id);

  res.status(204).json();
};

module.exports = logout;
