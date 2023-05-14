const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello Deric");
})

// Listen to Server
app.listen(5000, () => {
  console.log("server is listening", process.env.PORT);
})

// Connecting to Database
mongoose.connect(process.env.MONGO_URL)
  .then(console.log("database is connected"));