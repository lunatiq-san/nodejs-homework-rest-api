const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const usersOperations = require("../services/users");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, token] = authorization.split(" ");
  if (!token) {
    next(new Unauthorized("Please, provide a token"));
  }

  try {
    const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
    const user = await usersOperations.getUserById(decodedToken._id);
    if (!user || !user.token) {
      next(new Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(new Unauthorized("Invalid token"));
  }
};

module.exports = authMiddleware;
