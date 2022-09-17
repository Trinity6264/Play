const mongoose = require("mongoose");

const db = () => {
  mongoose.connect(
    "mongodb+srv://autum:autum6264@todo.kz0h79h.mongodb.net/",
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