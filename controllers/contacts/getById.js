const contactsOperations = require("../../services/contacts");
const { NotFound } = require("http-errors");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);

  if (!contact) throw new NotFound(`Contact with id=${contactId} not found`);

  res.json({
    status: "success",
    code: 200,
    contact,
    message: `Contact with id ${contactId} loaded`,
  });
};

module.exports = getById;
