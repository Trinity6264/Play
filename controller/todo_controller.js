const TodoModel = require("../models/todo_model");

const addTodo = async (req, res) => {
  try {
    const todoModel = new TodoModel({ ...req.body });
    const data = await todoModel.save();
    res.status(201).json({
      msg: "Todo created successfully",
      status: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      status: false,
      data: {},
    });
  }
};
const getTodo = async (req, res) => {
  try {
    const data = await TodoModel.find();
    if (!data) {
      res.status(404).json({
        status: false,
        msg: "Not found",
        data: {},
      });
      throw "Empty container";
    }
    res.status(200).json({
      msg: "Todo Found",
      status: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      status: false,
      data: {},
    });
  }
};

module.exports = { addTodo, getTodo };
