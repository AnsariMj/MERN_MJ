const Book = require("../models/bookModel")
const asyncHandler = require("express-async-handler");
const { deleteFile } = require("../middlewares/multerConfig")
const { cloudinary } = require("../middlewares/multerConfig")

// Add a new Books
const addBook = asyncHandler(async (req, res) => {
    const { bookName, bookPrice, isbnNumber, authorName, publishAt, publication, image } = req.body;
    try {

        const data = await Book.create({
            bookName,
            bookPrice,
            isbnNumber,
            authorName,
            publishAt,
            publication,
            image
        })
        // await book.save();
        console.log("Book Added:", data);
        res.status(200).json({
            data: data
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });

    }
});

//  Add New Books
// const addBook = asyncHandler(async (req, res) => {
//     try {
//         let cloudinaryResponse;
//         const file = req.file;
//         if (!file) {
//             console.log("File not found");
//         }

//         cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
//             upload_present: "book"
//         })

//         if (cloudinaryResponse) {
//             deleteFile(file.path);
//         }
//         const bookData = {
//             ...req.body,
//             photo: cloudinaryResponse?.url,
//         }

//         const newBook = await Book.create(bookData);
//         res.json(newBook);
//         console.log(newBook);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: " Server error" })
//     }

// });

// Update a Book
const updateBook = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// GetALl the Books
const getAllBook = asyncHandler(async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            message: "Book found successfully",
            data: books,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Get the Single Book
const getSingleBook = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const data = await book.findById(id);
        if (!book) {
            res.status(404).json({
                message: "Book not found in database "
            });
        } else {
            res.status(200).json({
                message: "Book found in database ",
                data: data,
            })
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Delete a Single Book
const deleteBook = asyncHandler(async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Book.findByIdAndDelete(id);
        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

//Search the Books
const searchBook = asyncHandler(async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = {
    addBook,
    updateBook,
    getAllBook,
    getSingleBook,
    deleteBook,
    searchBook
}