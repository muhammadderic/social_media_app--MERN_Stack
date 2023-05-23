const express = require("express");
const multer = require("multer");
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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage })
app.post("/api/upload", upload.single("file"),
  (req, res) => {
    try {
      return res.status(200).json("File uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  })

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

// Listen to Server
app.listen(5000, () => {
  console.log("server is listening");
})

// Connecting to Database
mongoose.connect(process.env.MONGO_URL)
  .then(console.log("database is connected"));