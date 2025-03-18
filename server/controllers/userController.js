import User from "../models/user.js"

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: "Gagal Menggambil semua users" })
  }
}

// Create User
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const alreadyUser = await User.findOne({ $or: [{ name }, { email }] })

    if (alreadyUser) {
      return res.status(400).json({ message: "Nama atau Email sudah di gunakan" })
    }

    const newUser = new User({ name, email })
    await newUser.save()
    res.json(newUser)
  } catch (err) {
    console.error("Create user error:", err)
    res.status(500).json({ error: "Gagal Membuat User" })
  }
}

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.json({ message: "User deleted" })
  } catch (err) {
    res.status(500).json({ error: "Gagal Menghapus User" })
  }
}

// Update User
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body

    // Check if another user already has this name or email
    const alreadyUser = await User.findOne({
      $or: [{ name }, { email }],
      _id: { $ne: id },
    })

    if (alreadyUser) {
      return res.status(400).json({ message: "Nama Atau Email yang sudah di gunakan tidak dapat di ubah" })
    }

    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true })

    if (!updatedUser) {
      return res.status(404).json({ message: "User tidak ditemukan" })
    }

    res.json(updatedUser)
  } catch (err) {
    console.error("Update user error:", err)
    res.status(500).json({ error: "Gagal mengupdate user" })
  }
}
