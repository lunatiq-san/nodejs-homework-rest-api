const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

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
