const { BadRequest } = require("http-errors");
const usersOperations = require("../../services/users");

const repeatSendEmailVerify = async (req, res) => {
  const { email } = req.body;

  const result = await usersOperations.repeatSendEmailVerify(email);
  if (!result) {
    throw new BadRequest("Verification has already been passed");
  }

  res.json({
    status: "success",
    code: 200,
    message: "Verification email send",
  });
};

module.exports = repeatSendEmailVerify;
