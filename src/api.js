const express = require("express");
const { db } = require("../config/db");
const serverless = require("serverless-http");
const todoRouter = require("../routes/todo_route");
const app = express();
const port = 5000;
const router = express.Router()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get('/',(req,res)=>{
  res.json([
    {
      name:"alex",
      age:40
    }
  ])
})
router.post('/',(req,res)=>{
  res.json([
    {
      name:"alex",
      age:40
    }
  ])
})

try {
  db().then((e) => {
    app.listen(port, () =>
      console.log("> Server is up and running on port : " + port)
    );
  });
} catch (error) {
    throw error.message;
}

app.use("/.netlify/functions/api", todoRouter);
module.exports.handler = serverless(app);
