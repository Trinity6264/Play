const express = require("express");
const { db } = require("../config/db");
const serverless = require("serverless-http");
const todoRouter = require("../routes/todo_route");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/.netlify/functions/api", todoRouter);
try {
  db().then((e) => {
    app.listen(port, () =>
      console.log("> Server is up and running on port : " + port)
    );
  });
} catch (error) {
    throw error.message;
}

module.exports.handler = serverless(app);
