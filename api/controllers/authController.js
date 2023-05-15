// Register
const register = async (req, res) => {
  res.send("Register");
}

// Login
const login = async (req, res) => {
  res.send("Login");
}

module.exports = {
  register, login
}