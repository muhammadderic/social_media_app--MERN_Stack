const router = require("express").Router();

// Get a User
router.get("/:id", (req, res) => {
  res.send("Get a User");
})

// Update User
router.put("/:id", (req, res) => {
  res.send("Update User");
})

// Delete User
router.delete("/:id", (req, res) => {
  res.send("Delete a User");
})

module.exports = router;