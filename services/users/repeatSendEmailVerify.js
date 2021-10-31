const { NotFound } = require("http-errors");
const { sendEmail } = require("../../helpers");
const getUserByEmail = require("./getUserByEmail");

const repeatSendEmailVerify = async (email) => {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new NotFound(`User with email: ${email} not found`);
  }
  if (!user.verify) {
    await sendEmail(user);
    return true;
  }
};

module.exports = repeatSendEmailVerify;
