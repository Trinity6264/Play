const mongoose = require("mongoose");

// awGcFY7lmA0RPCaY
// autumshipmentalics
const db = async () => {
  await mongoose.connect(
    "mongodb+srv://autumshipmentalics:awGcFY7lmA0RPCaY@cluster0.260w81r.mongodb.net/",
    {
      useNewUrlParser: true,
      serverSelectionTimeoutMS: 9000
    },
    (err) => {
      if (!err) {
        console.log("MongoDB Connection Succeeded.");
      } else {
        console.log("Error in DB connection: " + err);
      }
    }
  );
  mongoose.disconnect();
};

module.exports = { db };
