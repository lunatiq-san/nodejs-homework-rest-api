const { Contact } = require("../../models");

const updateStatusContact = async (contactId, body) => {
  const findContact = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return findContact;
};

module.exports = updateStatusContact;
