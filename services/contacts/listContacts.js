const { Contact } = require("../../models");

const listContacts = async (owner, skip, limit) => {
  return await Contact.find({ owner }, "_id name email phone owner", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");
};

module.exports = listContacts;
