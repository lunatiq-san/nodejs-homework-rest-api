const express = require("express");

const { tryCatchWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  validation(joiSchema),
  tryCatchWrapper(ctrl.registration)
);
router.post("/login", tryCatchWrapper(ctrl.login));
router.get("/logout", tryCatchWrapper(ctrl.logout));

module.exports = router;
