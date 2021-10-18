const contactsOperations = require("../../services/contacts");

const add = async (req, res, next) => {
  const { body, user } = req;
  const newContact = await contactsOperations.addContact(body, user._id);

  res.status(201).json({ newContact, message: "Contact was added" });
};

module.exports = add;
