const { BadRequest, NotFound } = require("http-errors");
const contactsOperations = require("../../services/contacts");
const Joi = require("joi");

const joiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const updateStatus = async (req, res) => {
  const { contactId } = req.params;
  const { body } = req;
  if (!body) throw new BadRequest("Missing field favorite");

  const { error } = joiSchema.validate(body);
  if (error) throw new BadRequest(`${error.message}`);

  const updateContact = await contactsOperations.updateStatusContact(
    contactId,
    body
  );

  if (!updateContact) throw new NotFound();
  res.json({
    status: "success",
    code: 200,
    updateContact,
    message: `Contact with id=${contactId} was updated`,
  });
};

module.exports = updateStatus;
