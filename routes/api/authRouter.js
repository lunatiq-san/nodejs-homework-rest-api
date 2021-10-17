const express = require("express");

const {
  tryCatchWrapper,
  validation,
  authMiddleware,
} = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  validation(joiSchema),
  tryCatchWrapper(ctrl.registration)
);
router.post("/login", validation(joiSchema), tryCatchWrapper(ctrl.login));
router.get("/logout", authMiddleware, tryCatchWrapper(ctrl.logout));

module.exports = router;
