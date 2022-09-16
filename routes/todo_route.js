const todoRouter = require("express").Router();
const { addTodo, getTodo } = require("../controller/todo_controller");

todoRouter.get("/", getTodo);

todoRouter.post("/", addTodo);

module.exports = todoRouter;
