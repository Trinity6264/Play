const express = require("express");
const { db } = require("../config/db");
const serverless = require("serverless-http");
const todoRouter = require("../routes/todo_route");
const app = express();
const port = 5000;
const router = express.Router()
const { addTodo, getTodo } = require("../controller/todo_controller");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/',getTodo)
router.post('/',addTodo)

try {
  db().then((e) => {
    app.listen(port, () =>
      console.log("> Server is up and running on port : " + port)
      );
    });
} catch (error) {
    throw error.message;
}
app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
