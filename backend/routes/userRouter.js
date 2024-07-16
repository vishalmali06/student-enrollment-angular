// routes/userRoutes.js

const express = require('express');
const { getAllUsers, getUserById, addUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:userID', getUserById);
router.post('/:userID',updateUser)
router.post('/', addUser)


module.exports = router;