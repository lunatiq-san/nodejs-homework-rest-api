const contactsOperations = require("../../services/contacts");

const add = async (req, res, next) => {
  const { _id } = req.user;
  const newContact = await contactsOperations.addContact(req.body, _id);

  res.status(201).json({ newContact, message: "Contact was added" });
};

module.exports = add;
