const express = require("express");

const { tryCatchWrapper, validation } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", tryCatchWrapper(ctrl.getAll));

router.get("/:contactId", tryCatchWrapper(ctrl.getById));

router.post("/", validation(contactSchema), tryCatchWrapper(ctrl.add));

router.delete("/:contactId", tryCatchWrapper(ctrl.removeById));

router.patch(
  "/:contactId",
  validation(contactSchema),
  tryCatchWrapper(ctrl.updateById)
);

module.exports = router;
