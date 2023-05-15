const router = require("express").Router();

const { createPost, getPost, updatePost, deletePost } = require("../controllers/postController");

// Create a Post
router.post("/", createPost);

// Get a Post
router.get("/:id", getPost);

// Update Post
router.put("/:id", updatePost);

// Delete a Post
router.delete("/:id", deletePost);

module.exports = router;