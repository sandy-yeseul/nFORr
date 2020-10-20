const mongoose = require("mongoose");
const Book = require("../models/book");
require("dotenv").config();

async function makeDb() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.log(err));
}

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
  //REVIEW don't know
  let book;
  try {
    book = await new Book(data);
  } catch (err) {
    console.log("error to make schema blah");
  }
  try {
    const savedBook = await book.save();
    return savedBook;
  } catch (err) {
    console.log("error in saving process: data-access");
  }
}
async function update(id, item) {
  //TODO return should be readable
  try {
    const updatedBook = await Book.updateOne({ _id: id }, { $set: item });
    console.log("udpated book in db");
    return updatedBook;
  } catch (err) {
    console.log("data-access: error in updateing");
  }
}
async function remove(id) {
  //TODO cannot delete same one-validation need
  //TODO return deletedBook: show title and author etc
  try {
    const removedBook = await Book.deleteOne({ _id: id });
    console.log("deleted on db");
    return removedBook;
  } catch (err) {
    console.log("error on deleting: db");
  }
}
module.exports = { makeDb, findAll, findById, findOne, insert, update, remove };
