// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userID: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type: String, required: true}
    
});

module.exports = mongoose.model('User', userSchema);