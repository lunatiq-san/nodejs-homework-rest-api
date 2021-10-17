const contactsOperations = require("../../services/contacts");

const updateById = async (req, res, next) => {
  const { id: contactId } = req.params;
  const { _id } = req.user;

  const result = await contactsOperations.updateContact(
    contactId,
    req.body,
    _id
  );
  if (!result) throw new NotFound(`Contact with id=${id} not found`);

  res.status(201).json({
    status: "success",
    code: 201,
    message: `Update contact with id=${id} success`,
    data: {
      result,
    },
  });
};

module.exports = updateById;
