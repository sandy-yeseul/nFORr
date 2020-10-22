const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    _id: String,
    title: String,
    author: String,
    publisher: String,
    publishDate: String,
    seller: String,
    price: String
});

const Book = module.exports =mongoose.model('Book', bookSchema);
// module.exports.get = function (callback, limit) {
//     Book.find(callback).limit(limit);
// }
