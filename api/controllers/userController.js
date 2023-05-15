// Get a User
const getUser = async (req, res) => {
  res.send("Get a User");
}

// Update User
const updateUser = async (req, res) => {
  res.send("Update User");
}

// Delete a User
const deleteUser = async (req, res) => {
  res.send("Delete a User");
}

module.exports = {
  getUser, updateUser, deleteUser
}