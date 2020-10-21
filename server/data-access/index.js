const mongoose = require("mongoose");
const Book = require("../models/book");
require("dotenv").config();

async function makeDb() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.log(err));
}
//REVIEW this might be useful
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });
async function findAll() {
  const books = await Book.find();
  return books;
}
async function findById(id) {
  const book = await Book.findById(id);
  return book;
}
async function findOne(condition) {
  const book = await Book.findOne(condition);
  return book;
}
async function insert(data) {
  const book = await new Book(data);
  try {
    const savedBook = await book.save();
    return savedBook;
  } catch (err) {
    throw new Error(err)
  }
}
async function update(id, item) {
  const options = {new: true}
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { $set: item }, options);
    return updatedBook;
  } catch (err) {
    throw new Error(err)
  }
}
async function remove(id) {
  const removedBook = await Book.findByIdAndDelete(id);
    if(!removedBook) throw new Error("doesn't exist")
    return removedBook;
}
module.exports = { makeDb, findAll, findById, findOne, insert, update, remove };
