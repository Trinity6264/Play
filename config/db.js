const mongoose = require("mongoose");

// awGcFY7lmA0RPCaY
// autumshipmentalics
const db = async () => {
  try {
    const resp = await mongoose.connect(
      "mongodb+srv://autumshipmentalics:awGcFY7lmA0RPCaY@cluster0.260w81r.mongodb.net/"
    );
    if(mongoose.ConnectionStates.connected){
      console.log("Database opend");
      
    }else{
      console.log(mongoose.ConnectionStates);

    }
  } catch (error) {
    console.log(error);
  }
};
db();

