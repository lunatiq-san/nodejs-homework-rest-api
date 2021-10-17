const contactsOperations = require("../../services/contacts");

const getAll = async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const { _id } = req.user;

  const contacts = await contactsOperations.listContacts(_id, skip, limit);
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
