const express = require("express");

const { tryCatchWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", tryCatchWrapper(ctrl.getAll));

router.get("/:contactId", tryCatchWrapper(ctrl.getById));

router.post("/", validation(joiSchema), tryCatchWrapper(ctrl.add));

router.delete("/:contactId", tryCatchWrapper(ctrl.removeById));

router.patch(
  "/:contactId",
  validation(joiSchema),
  tryCatchWrapper(ctrl.updateById)
);

module.exports = router;
