const listContacts = require("./listContacts");
const updateContactsDb = require("./updateContactsDb");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(
    (contact) => contact.id === Number(contactId)
  );

  if (index === -1) return null;

  contacts[index] = { ...contacts[index], ...body };
  await updateContactsDb(contacts);
  return contacts[index];
};

module.exports = updateContact;
