const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(
    (contact) => contact.id === Number(contactId)
  );
  if (index === -1) return null;

  return contacts[index];
};

module.exports = getContactById;
