const { Contact } = require("../../models");

const updateContact = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body);
};

module.exports = updateContact;
