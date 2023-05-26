const router = require("express").Router();

const { getUser, getFriends, updateUser, deleteUser } = require("../controllers/userController");

// Get a User
router.get("/", getUser);

// Get Friends
router.get("/friends/:id", getFriends)

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;