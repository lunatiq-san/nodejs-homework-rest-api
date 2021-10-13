const { Contact } = require("../../models");

const addContact = async (body, owner) => {
  try {
    const { name, email, phone, favorite } = body;
    const newContact = new Contact({ name, email, phone, favorite, owner });
    await newContact.save();
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
