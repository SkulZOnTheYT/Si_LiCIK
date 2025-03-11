const User = require("../models/user");

// Get All Users
exports.getUsers = async (req, res) => {
    try{
    const users = await User.find();
    res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Gagal Menggambil semua users" });
    }
};

// Create User
exports.createUser = async (req, res) => {
    try{
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    const Alreadyuser = await User.findOne({ name, email});
    if (Alreadyuser){
        return res.status(400).json({ message: "Nama atau Email sudah di gunakan"});
    }
    await newUser.save();
    res.json(newUser);
    } catch {
        res.status(500).json({ error: "Gagal Membuat User" });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User deleted" });
};

//Update User
exports.Updateuser = async (req, res) => {
    try{
    const { id } = req.params;
    const { name, email } = req.body;
    const Alreadyuser = await User.findOne({ name, email});
    if (Alreadyuser){
        return res.status(400).json({ message: "Nama Atau Email yang sudah di gunakan tidak dapat di ubah"});
    }
    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    res.json(updatedUser);
    }
    catch (err){
        res.status(500).json({error: "gagal menggupdate"})
    }
};
