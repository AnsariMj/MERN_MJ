const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    // data: {

    bookName: {
        type: String,
    },
    bookPrice: {
        type: Number
    },
    isbnNumber: {
        type: Number
    },
    authorName: {
        type: String
    },
    publishAt: {
        type: String
    },
    publication: {
        type: String
    },
    image: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Feloquentjavascript.net%2F&psig=AOvVaw1mjlJkuLDt2Fzzb5xhqrJO&ust=1709223044630000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLC-h5i2zoQDFQAAAAAdAAAAABAE",
        set: (v) => v === ""
            ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Feloquentjavascript.net%2F&psig=AOvVaw1mjlJkuLDt2Fzzb5xhqrJO&ust=1709223044630000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLC-h5i2zoQDFQAAAAAdAAAAABAE"
            : v,
    },
    // },
    // photo: []

});

const Books = mongoose.model("Books", bookSchema);
module.exports = Books;