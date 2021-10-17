const { Contact } = require("../../models");

const listContacts = async (owner) => {
  return await Contact.find({ owner }).populate("owner", "email");
};

module.exports = listContacts;
