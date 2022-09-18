const express = require("express");
const { addTodo, getTodo,play } = require("../controller/todo_controller");
const todoRouter = express.Router();
todoRouter.get("/", getTodo);

todoRouter.post("/", addTodo);
todoRouter.get("/play", play);

module.exports = todoRouter;
