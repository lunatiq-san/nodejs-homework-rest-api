const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "../../db/contacts.json");

async function updateContactsDb(newContactsList) {
  const json = JSON.stringify(newContactsList, null, 2);
  await fs.writeFile(contactsPath, json);
}

module.exports = updateContactsDb;
