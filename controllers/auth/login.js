const usersOperations = require("../../services/users");

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await usersOperations.loginUser(email, password);

  res.json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
