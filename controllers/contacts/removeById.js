const { NotFound } = require("http-errors");
const contactsOperations = require("../../model/contacts");

const removeById = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await contactsOperations.getContactById(id);

  if (!contact) throw new NotFound(`Contact with id=${id} not found`);

  await contactsOperations.removeContact(id);
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id ${id} deleted`,
  });
};

module.exports = removeById;
