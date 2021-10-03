const { Contact } = require("../../models");

const addContact = async (body) => {
  try {
    const { name, email, phone, favorite } = body;
    const newContact = new Contact({ name, email, phone, favorite });
    await newContact.save();
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
