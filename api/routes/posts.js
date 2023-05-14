const router = require("express").Router();

// Create a Post
router.post("/", (req, res) => {
  res.send("Create a Post");
})

// Get a Post
router.get("/:id", (req, res) => {
  res.send("Get a Post");
})

// Update Post
router.put("/:id", (req, res) => {
  res.send("Update Post");
})

// Delete a Post
router.delete("/:id", (req, res) => {
  res.send("Delete a Post");
})

module.exports = router;