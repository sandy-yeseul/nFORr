const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    publisher: String,
    publishDate: String,
    seller: String,
    price: String,
    image: String,
    isPublished: {
        type: Number,
        default: 0
    }
});

const Book = module.exports =mongoose.model('Book', bookSchema);