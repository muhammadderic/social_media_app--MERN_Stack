const User = require("../models/User");
const bcrypt = require("bcrypt");

// Get a User
const getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Update User
const updateUser = async (req, res) => {
  const id = req.params.id;
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  try {
    await User.findByIdAndUpdate(id, {
      $set: req.body,
    })
    res.status(200).json({ message: "User has been updated" });
  } catch (error) {
    res.status(400).json({ messsage: error.message });
  }
}

// Delete a User
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);

    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
}

module.exports = {
  getUser, updateUser, deleteUser
}