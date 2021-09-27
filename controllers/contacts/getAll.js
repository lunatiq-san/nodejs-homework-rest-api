const contactsOperations = require("../../model");

const getAll = async (req, res, next) => {
  const contacts = await contactsOperations.listContacts();
  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
    message: "Contacts list loaded",
  });
};

module.exports = getAll;
