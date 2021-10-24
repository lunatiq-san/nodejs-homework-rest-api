const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const usersOperations = require("../../services/users");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempDir, originalname } = req.file;
  const [extension] = originalname.split(".").reverse();
  const filename = `${_id}.${extension}`;
  const uploadDir = path.join(__dirname, "../../", "public\\avatars", filename);

  try {
    const image = await Jimp.read(tempDir);
    image.resize(256, 256).quality(60).writeAsync(tempDir);
    await fs.rename(tempDir, uploadDir);
    const avatarURL = path.join("avatars", filename);
    await usersOperations.updateAvatar(_id, avatarURL);
    res.json({
      status: "success",
      code: 200,
      message: "Update avatar success",
    });
  } catch (error) {
    await fs.unlink(tempDir);
    next(error);
  }
};

module.exports = updateAvatar;
