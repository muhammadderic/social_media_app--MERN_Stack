const Post = require("../models/Post");

// Create a Post
const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get a Post
const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

// Update Post
const updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).json({ message: "Post has been updated" });
  } catch (error) {
    res.status(500).json({ message: error.messsage });
  }
}

// Delete a Post
const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createPost, getPost, updatePost, deletePost
}