const router = require("express").Router();

const { getUser, updateUser, deleteUser } = require("../controllers/userController");

// Get a User
router.get("/", getUser);

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;