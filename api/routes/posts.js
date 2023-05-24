const router = require("express").Router();

const {
  createPost,
  getPost,
  getTimeline,
  updatePost,
  likeDislikePost,
  deletePost,
} = require("../controllers/postController");

// Create a Post
router.post("/", createPost);

// Get a Post
router.get("/:id", getPost);

// Get Timeline
router.get("/timeline/:id", getTimeline);

// Update Post
router.put("/:id", updatePost);

// Like / dislike a Post
router.put("/:id/like", likeDislikePost)

// Delete a Post
router.delete("/:id", deletePost);

module.exports = router;