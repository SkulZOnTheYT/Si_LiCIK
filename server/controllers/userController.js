const User = require("../models/user");

// Get All Users
exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

// Create User
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.json(newUser);
};

// Delete User
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted" });
};
