const { Contact } = require("../../models");

const removeContact = async (contactId) => {
  await Contact.findByIdAndRemove(contactId);
};

module.exports = removeContact;
