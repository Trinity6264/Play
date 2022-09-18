const todoRouter = require("express").Router();
const { addTodo, getTodo,play } = require("../controller/todo_controller");

todoRouter.get("/", getTodo);

todoRouter.post("/", addTodo);
todoRouter.get("/play", play);

module.exports = todoRouter;
