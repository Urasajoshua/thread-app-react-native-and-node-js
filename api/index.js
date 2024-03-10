const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://urasajoshuag:urasajoshua01@cluster0.1nzism3.mongodb.net/"
  )
  .then(() => {
    console.log("mongo connected");
  })
  .catch(() => {
    console.log("mongo not connected");
  });

app.listen(port, () => {
  console.log("server is running in port ", port);
});
