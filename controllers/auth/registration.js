const usersOperations = require("../../services/users");
const { Conflict } = require("http-errors");

const registration = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await usersOperations.getUserByEmail(email);
  if (user) {
    throw new Conflict(`User with email: ${email} already exist`);
  }
  const newUser = await usersOperations.addUser(email, password);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newUser,
    },
  });
};

module.exports = registration;
