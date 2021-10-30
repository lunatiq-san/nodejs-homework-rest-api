const express = require("express");

const {
  tryCatchWrapper,
  authMiddleware,
  upload,
} = require("../../middlewares");
const ctrl = require("../../controllers/users");

const router = express.Router();

router.get("/verify/:verificationToken", tryCatchWrapper(ctrl.verify));
router.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  tryCatchWrapper(ctrl.updateAvatar)
);

module.exports = router;
