const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const authMiddleware = (req, res, next) => {
  const [tokenType, token] = req.headers["authorization"].split(" ");
  // token?
  if (!token && tokenType !== "Bearer") {
    next(new Unauthorized("Please, provide a token"));
  }
  try {
    // decode
    // const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new Unauthorized("Invalid token"));
  }
  // req.user
};

module.exports = authMiddleware;
