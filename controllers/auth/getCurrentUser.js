const { Unauthorized } = require("http-errors");
const usersOperations = require("../../services/users");

const getCurrentUser = async (req, res, next) => {
  const { user } = req;
  const contact = await usersOperations.getUserById(user._id);

  if (!contact) {
    throw new Unauthorized("Not authorized");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = getCurrentUser;
