const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

// Listen to Server
app.listen(5000, () => {
  console.log("server is listening");
})

// Connecting to Database
// mongoose.connect(process.env.MONGO_URL)
//   .then(console.log("database is connected"));