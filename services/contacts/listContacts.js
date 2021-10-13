const { Contact } = require("../../models");

const listContacts = async (owner) => {
  return await Contact.find({ owner });
};

module.exports = listContacts;
