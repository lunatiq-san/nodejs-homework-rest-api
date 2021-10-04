const contactsOperations = require("../../services/contacts");

const add = async (req, res, next) => {
  const newContact = await contactsOperations.addContact(req.body);

  res.status(201).json({ newContact, message: "Contact was added" });
};

module.exports = add;
