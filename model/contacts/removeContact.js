const listContacts = require("./listContacts");
const updateContactsDb = require("./updateContactsDb");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(
    (contact) => contact.id === Number(contactId)
  );

  if (index === -1) {
    throw new Error(`Contact with ID: ${contactId} not found`);
  }

  contacts.splice(index, 1);
  await updateContactsDb(contacts);

  console.log(`The contact with ID: ${contactId} was removed! Contact list: `);

  return contacts;
};

module.exports = removeContact;
