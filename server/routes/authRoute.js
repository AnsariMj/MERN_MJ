const express = require('express');
const router = express.Router();


const {
    registerUser,
    loginUser,
    updateUser,
    getAllUser,
    getSingleUser,
    deleteUser,
    searchUser
} = require("../controllers/authController");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/auth/:id", updateUser);
router.get("/me", getAllUser);
router.get("/user/:id", getSingleUser);
router.delete("/delete/:id", deleteUser);
router.get("/search", searchUser);

module.exports = router;