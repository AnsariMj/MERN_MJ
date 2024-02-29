const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        unique: true
    },
    userContact: {
        type: String
    },
    userPassword: {
        type: String
    },
    userConfirmPassword: {
        type: String
    }

});

const User = mongoose.model("User", userSchema);
module.exports = User;