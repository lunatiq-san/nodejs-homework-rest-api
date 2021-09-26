const express = require("express");
const router = express.Router();
const { NotFound, BadRequest } = require("http-errors");
const Joi = require("joi");

const contactsOperations = require("../../model");

const joiSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  phone: Joi.string().min(7).max(14).required(),
});

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
      message: "Contacts list loaded",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getContactById(contactId);

    if (!contact) throw new NotFound(`Contact with id=${contactId} not found`);

    res.json({
      status: "success",
      code: 200,
      contact,
      message: `Contact with id ${contactId} loaded`,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) throw new BadRequest(error.message);

    const newContact = await contactsOperations.addContact(req.body);

    res.status(201).json({ newContact, message: "Contact was added" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const id = req.params.contactId;
    const contact = await contactsOperations.getContactById(id);

    if (!contact) throw new NotFound(`Contact with id=${id} not found`);

    const newContactList = await contactsOperations.removeContact(id);
    res.json({
      status: "success",
      code: 200,
      message: `Contact with id ${id} deleted`,
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:contactId", async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) throw new BadRequest(error.message);

    const id = req.params.contactId;

    const result = await contactsOperations.updateContact(id, req.body);
    if (!result) throw new NotFound(`Contact with id=${id} not found`);

    res.json({
      status: "success",
      code: 201,
      message: `Update contact with id=${id} success`,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
