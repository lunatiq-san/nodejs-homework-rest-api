const { Contact } = require("../../models");

const getContactById = async (contactId, userId) => {
  return await Contact.findById(contactId);
};

module.exports = getContactById;
