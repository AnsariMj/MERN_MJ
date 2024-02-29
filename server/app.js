const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();


// Database Connection
const dbConnect = require("./database/dbConnect");
dbConnect();



//Using Services
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
require("dotenv").config();




// Getting Routes From routes Folder
const books = require("./routes/bookRoute");
const user = require("./routes/authRoute");



// Defining Routes API
app.get("/", (req, res) => {
    res.json("Server is running");
});
app.use("/api/v1/book", books)
app.use("/api/v1/auth", user)


// Establishing Connection 
const port = 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});