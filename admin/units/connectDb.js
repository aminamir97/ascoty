const mongoose = require("mongoose");
require("dotenv").config();
async function connectDb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {}
}
module.exports = connectDb;
