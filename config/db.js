const mongoose = require("mongoose");

const db = () => {
  mongoose.connect(
    "mongodb://localhost:27017/todo",
    {
      useNewUrlParser: true,
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    }
  );
};

module.exports = db;