const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: String,
    seller: String,
    price: Number,
    publishDate: Date
});

const Book = module.exports =mongoose.model('Book', bookSchema);
// module.exports.get = function (callback, limit) {
//     Book.find(callback).limit(limit);
// }
