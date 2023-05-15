// Create a Post
const createPost = async (req, res) => {
  res.send("Create a Post");
}

// Get a Post
const getPost = async (req, res) => {
  res.send("Get a Post");
}

// Update Post
const updatePost = async (req, res) => {
  res.send("Update Post");
}

// Delete a Post
const deletePost = async (req, res) => {
  res.send("Delete a Post");
}

module.exports = {
  createPost, getPost, updatePost, deletePost
}