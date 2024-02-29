const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/webp"
    )
        cb(null, true);
    else
        cb(null, false);
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: fileFilter,
});

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(" Error delete file: ", err);
        } else {
            // console.log(" File deleted Successfully");
        }
    });
}
module.exports = {
    upload,
    deleteFile,
};
