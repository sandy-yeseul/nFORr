const mongoose = require("mongoose");
const Book = require("./book")
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
  try{
    const books = await Book.find();
    return books;
  } catch(err){
    throw new Error(err);
  }
}
async function findAllCondtion(condition){
  try{
    const books = await Book.find(condition);
    return books;
  } catch(err){
    throw new Error(err);
  }
}
async function findById(id) {
  try{
    const book = await Book.findById(id);
    return book;
  } catch(err){
    throw new Error(err);
  }
}
async function findOne(condition) {
  try{
    const book = await Book.findOne(condition);
    return book;
  } catch(err){
    throw new Error(err);
  }
}
async function insert(data) {
  if(await isDuplicates(data)) { throw new Error("Duplicate cannot be stored");}
  try {
    const book = await new Book(data);
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
  try{
    const removedBook = await Book.findByIdAndDelete(id);
    if(!removedBook) throw new Error("doesn't exist")
    return removedBook;
  } catch(err){
    throw new Error(err);
  }
}
module.exports = { makeDb, findAll, findAllCondtion, findById, findOne, insert, update, remove };

async function isDuplicates(book) {
  const author = book.author;
  const title = book.title;
  const findDuplicate = await Book.findOne({ author: author });
  if (findDuplicate!=null && findDuplicate.title === title) {
    return true;
  }
  return false;
}