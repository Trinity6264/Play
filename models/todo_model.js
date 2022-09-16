const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = TodoModel;
