const listContacts = require("./listContacts");
const updateContactsDb = require("./updateContactsDb");

const addContact = async (body) => {
  const contacts = await listContacts();
  const { name, email, phone } = body;
  const newContact = {
    id: contacts[contacts.length - 1].id + 1,
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContactsDb(contacts);

  console.table(contacts);
  return newContact;
};

module.exports = addContact;
