const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUserById = async (req, res) => {
    try {
         //const { userID } = req.body;
        const userID = req.params.userID;
        const user = await User.findOne({ userID })
        res.json(user);

           } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const addUser = async (req, res) => {
    const { userID, password, role } = req.body;
    try {
        const user = new User({  userID, password, role});
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


async function updateUser(req, res) {
    try {
      const { userid, role, password } = req.body;
      await User.update(
        { role, password }, // New values
        { where: { userid } } // Condition
      );
      res.json({ success: true });
    } catch (error) {
      throw new Error(error);
    }
  };

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser
};

