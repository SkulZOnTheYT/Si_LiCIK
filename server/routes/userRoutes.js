const express = require("express");
const { getUsers, createUser, deleteUser, Updateuser } = require("../controllers/userController");

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.put("/:id", Updateuser);

module.exports = router;    
