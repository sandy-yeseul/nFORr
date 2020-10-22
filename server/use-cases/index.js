const BookDb = require("../data-access/index");
const makeBook = require("../book");

async function searchBook(searchQuery) {
    try {
      const dbBooks = await BookDb.findAllCondtion({ author: searchQuery });
      const formattedBooks = await formatBooks(dbBooks);
      const data = await {
        body: formattedBooks,
        code: 200,
      };
      return data;
    } catch (err) {
      console.log(err)
      const data = {
        body: err,
        code: 400,
      };
      return data;
    }
  }
  async function getAllBook(){
    try{
      const dbBooks = await BookDb.findAll();
      const formattedBooks = await formatBooks(dbBooks);
      const data = await{
        body: formattedBooks,
        code: 200
      }
      return data;
    } catch (err){
      const data = {
        body: err,
        code: 400
      }
      return data;
    }
  }
  async function getBook(id){
    try{
      const dbBook = await BookDb.findById(id);
      const formattedBook = await formatBook(dbBook);
      const data = {
        body: formattedBook,
        code: 200
      }
      return data
    } catch(err){
      const data = {
        body: err,
        code: 400
      }
      return data;
    }
  }
  async function addBook(body){
    try{
      const book = await formatBook(body);
      if(isDuplicates(book)){throw new Error("Duplicate can't be stored")}
      const savedBook = await BookDb.insert(book);
      const formattedBook = await formatBook(savedBook);
      const data = {
        body: formattedBook,
        code: 201
      }
      return data;
    } catch(err){
      console.log(err)
      const data = {
        body: err,
        code: 400
      }
      return data;
    }
  }
  async function updateBook(id, body){
    const book = await formatBook(body);
    let removeIdBook = {...book};
    delete removeIdBook._id;
    try{
      const updatedBook = await BookDb.update(id, removeIdBook);
      const formattedBook = await formatBook(updatedBook);
      const data = {
        body: formattedBook,
        code: 201
      }
      return data;
    } catch(err){
      const data = {
        body: err,
        code: 400
      }
      return data;
    }
  }
  async function deleteBook(id){
    try{
      const removedBook = await BookDb.remove(id);
      const formattedBook = formatBook(removedBook);
      const data ={
        body: formattedBook,
        code: 201
      }
      return data;
    } catch (err){
      const data ={
        body: err,
        code: 400
      }
      return data;
    }
  }
  module.exports = {searchBook, getAllBook, getBook, addBook, updateBook, deleteBook}
  
  async function formatBooks(dbBooks) {
    const formattedBooks = [];
    for (let i = 0; i < dbBooks.length; i++) {
      formattedBooks.push(makeBook(dbBooks[i]));
    }
    return formattedBooks;
  }
  async function formatBook(dbBook){
    return makeBook(dbBook);
  }
  async function isDuplicates(book){
    const author = book.author;
    const title = book.title;
    const findDuplicate = await BookDb.findOne({author: author});
    if(findDuplicate.title === title){return true;}
    return false;
  }