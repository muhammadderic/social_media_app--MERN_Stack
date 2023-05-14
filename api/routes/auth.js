const router = require("express").Router();

// Register
router.post("/register", (req, res) => {
  res.send("Register");
})

// Login
router.post("/login", (req, res) => {
  res.send("Login");
})

module.exports = router;