const User = require("../models/User");

getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    console.log("Error while loading users", error);
    res.status(500).json({ error: "Error while loading users" });
  }
};

getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error while retrieving user", error);
    res.status(500).json({ error: "Error while retrieving user" });
  }
};

addUser = async (req, res) => {
  const { firstName, lastName, email} = req.body;


  try {
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    console.error("Error while adding user", error);
    res.status(500).json({ error: "Error while adding user" });
  }
};

updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, updates, {
      new: true, 
      runValidators: true, 
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully!", user });
  } catch (error) {
    console.error("Error while updating user", error);
    res.status(500).json({ error: "Error while updating user" });
  }
};

deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Error while deleting user", error);
    res.status(500).json({ error: "Error while deleting user" });
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};
