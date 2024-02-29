const mongoose = require("mongoose")
require('dotenv').config();

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {
        });
        console.log("Database connected successfully")
    } catch (error) {
        console.log(" Database connection error: " + error)
    }
}

module.exports = dbConnect;