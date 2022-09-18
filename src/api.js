const express = require("express");
require("../config/db");
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



app.use("/.netlify/functions/api", todoRouter);
module.exports.handler = serverless(app);
