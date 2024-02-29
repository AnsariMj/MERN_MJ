const express = require('express');
const router = express.Router();

// const { upload } = require("../middlewares/multerConfig")

const {
    addBook,
    updateBook,
    getAllBook,
    getSingleBook,
    deleteBook,
    searchBook
} = require("../controllers/bookController");


router.post(
    "/addBook",
    // upload.single("photo"),
    addBook
);
router.put("/updateBook/:id", updateBook);
router.get("/getAllBook", getAllBook);
router.get("/getSingleBook/:id", getSingleBook);
router.delete("/deleteBook/:id", deleteBook);
router.get("/search", searchBook);


module.exports = router;
