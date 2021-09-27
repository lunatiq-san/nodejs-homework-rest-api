const contactsOperations = require("../../model/contacts");

const updateById = async (req, res, next) => {
  const id = req.params.contactId;

  const result = await contactsOperations.updateContact(id, req.body);
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
