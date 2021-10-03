const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const connectMongo = async () => {
  return mongoose
    .connect(DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = { connectMongo };
