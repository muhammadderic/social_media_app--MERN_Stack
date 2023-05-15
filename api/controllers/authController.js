const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
const register = async (req, res) => {
  try {
    // generate password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    // save user
    const { username, email, ...other } = await newUser.save();
    res.status(201).json({ username, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Login
const login = async (req, res) => {
  try {
    // check user 
    const { username, email, password, ...other } = await User.findOne({ email: req.body.email });
    !email && res.status(404).json({ message: "User not found" });

    // validate password
    const validPassword = await bcrypt.compare(req.body.password, password);
    !validPassword && res.status(400).json({ message: "Password is not valid" });

    res.status(200).json({ username, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register, login
}