const { NotFound } = require("http-errors");
const contactsOperations = require("../../services/contacts");

const removeById = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { id: contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);

  if (!contact) throw new NotFound(`Contact with id=${contactId} not found`);

  await contactsOperations.removeContact(contactId, userId);
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id ${contactId} deleted`,
  });
};

module.exports = removeById;
