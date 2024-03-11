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

const User = require('./models/User')
const Post = require('./models/Post')


//register user 
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    //check if email is existing in database
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'email already exist' })
    }
    //create a user
    const newUser = new User({ name, email, password })

    //generate and store verification tokens
    newUser.verificationToken = crypto.randomBytes(20).toString("hex")

    //save the user
    await newUser.save()

    //send the verification email to the user

    sendVerificationToken(newUser.email, newUser.verificationToken)
    res.status(200).json({ message: 'registration successfullly' })
  } catch (error) {
    console.log('register error', error);
    res.status(500).json({ message: "error registering user" })
  }
})

const sendVerificationToken = async (email, verificationToken) => {
  //create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'urasajoshuatest01@gmail.com',
      pass: 'lfcf qvwb nlwo nlxe'
    }
  })
  //compose email message
  const mailOptions = {
    from: "threads.com",
    to: email,
    subject: 'Email Verification',
    text: `click the following link to verify your email http://localhost:3000/verify/${verificationToken}`
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log('sending email error', error);
  }
}


//endpoint to verify the user
app.get('/verify:token', async (req, res) => {
  try {
    const token = req.params.token
    const user = await User.findOne({ verificationToken: token })
    if (!user) {
      return res.status(404).json({ message: 'invalid token' })
    }
    user.verified = true
    user.verificationToken = undefined
    await user.save()
    res.status(200).json({ message: 'email verification successfuly' })

  } catch (error) {
    console.log('error geting token', error);
    res.status(500).json({ message: 'email verification fail' })
  }
})