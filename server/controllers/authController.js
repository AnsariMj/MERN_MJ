const user = require("../models/user")
const asyncHandler = require("express-async-handler");
// const { deleteFile } = require("../middlewares/multerConfig")
// const { cloudinary } = require("../middlewares/multerConfig")


// Add a new User
const registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, phone, password, confirmPassword } = req.body;
        if (!name || !email || !phone || !password || !confirmPassword) {
            res.send.status(400).json({
                message: " Please Provide correct credentials"
            })
        }
        // check if that email user already exist or not
        const userFound = await user.findOne({ userEmail: email });

        const newUser = await user.create(UserData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });

    }
});

// Update a User
const loginUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});


// Update a User
const updateUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});

// GetALl the Users
const getAllUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});

// Get the Single User
const getSingleUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});

// Delete a Single User
const deleteUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});

//Search the Users
const searchUser = asyncHandler(async (req, res) => {
    try {

    } catch (error) {

    }
});

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    searchUser
}