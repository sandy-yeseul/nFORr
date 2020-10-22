const BookDb = require("../data-access/index");
const makeBook = require("../book");

async function searchBook(searchQuery) {
  try {
    const dbBooks = await BookDb.findAllCondtion({ author: searchQuery });
    const formattedBooks = await formatBooks(dbBooks);
    return formatData(formattedBooks, 200);
  } catch (err) {
    console.log(err);
    return formatData(err.message, 400);
  }
}
async function getAllBook() {
  try {
    const dbBooks = await BookDb.findAll();
    const formattedBooks = await formatBooks(dbBooks);
    return formatData(formattedBooks, 200);
  } catch (err) {
    return formatData(err.message, 400);
  }
}
async function getBook(id) {
  try {
    const dbBook = await BookDb.findById(id);
    const formattedBook = await formatBook(dbBook);
    return formatData(formattedBook, 200);
  } catch (err) {
    console.log(err);
    return formatData(err.message, 400);
  }
}
async function addBook(body) {
  try {
    const book = await formatBook(body);
    const savedBook = await BookDb.insert(book);
    const formattedBook = await formatBook(savedBook);
    return formatData(formattedBook, 201);
  } catch (err) {
    console.log(err);
    return formatData(err.message, 400);
  }
}
async function updateBook(id, body) {
  const book = await formatBook(body);
  let removeIdBook = { ...book };
  delete removeIdBook._id;
  try {
    const updatedBook = await BookDb.update(id, removeIdBook);
    const formattedBook = await formatBook(updatedBook);
    return formatData(formattedBook, 201);
  } catch (err) {
    console.log(err);
    return formatData(err.message, 400);
  }
}
async function deleteBook(id) {
  try {
    const removedBook = await BookDb.remove(id);
    const formattedBook = formatBook(removedBook);
    return formatData(formattedBook, 201);
  } catch (err) {
    console.log(err);
    return formatData(err.message, 400);
  }
}
module.exports = {
  searchBook,
  getAllBook,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};

function formatBooks(dbBooks) {
  const formattedBooks = [];
  for (let i = 0; i < dbBooks.length; i++) {
    formattedBooks.push(makeBook(dbBooks[i]));
  }
  return formattedBooks;
}
function formatBook(dbBook) {
  return makeBook(dbBook);
}
function formatData(data, code) {
  return {
    body: data,
    code: code,
  };
}
 