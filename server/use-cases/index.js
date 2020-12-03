const BookDb = require("../data-access/index");
const makeBook = require("../book");
const { findPublisher } = require("./scraper");

const successOk = 200;
const successCreate = 201;
const noContent = 204;
const badRequest = 400;

async function searchBook(searchQuery) {
  try {
    const dbBooks = await BookDb.findAllCondtion({
      $or: [{ title: searchQuery }, { author: searchQuery }],
    });
    const formattedBooks = await formatBooks(dbBooks);
    return formatData(formattedBooks, successOk);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
async function getAllBook() {
  try {
    const dbBooks = await BookDb.findAll();
    const formattedBooks = await formatBooks(dbBooks);
    return formatData(formattedBooks, successOk);
  } catch (err) {
    return formatData(err.message, badRequest);
  }
}
async function getBook(id) {
  try {
    const dbBook = await BookDb.findById(id);
    const formattedBook = await formatBook(dbBook);
    return formatData(formattedBook, successOk);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
async function addBook(body) {
  try {
    const book = await formatBook(body);
    const savedBook = await BookDb.insert(book);
    const formattedBook = await formatBook(savedBook);
    return formatData(formattedBook, successCreate);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
async function updateBook(id, body) {
  const book = await formatBook(body);
  let removeIdBook = { ...book };
  delete removeIdBook._id;
  try {
    const updatedBook = await BookDb.update(id, removeIdBook);
    const formattedBook = await formatBook(updatedBook);
    return formatData(formattedBook, successCreate);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
async function deleteBook(id) {
  try {
    const removedBook = await BookDb.remove(id);
    const formattedBook = formatBook(removedBook);
    return formatData(formattedBook, successCreate);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
async function scrapeBook(body) {
  try {
    const books = [];
    body.forEach(async (book) => {
      const publisherFound = await findPublisher(book);
      if (publisherFound) books.push(formatBook(book));
    });
    if (books.length < 0) return formatData(null, noContent);
    books.forEach(async(book) => {
      const id = book._id;
      delete book._id;
      await BookDb.update(id, book);
    })
    return formatData(null, successOk);
  } catch (err) {
    console.log(err);
    return formatData(err.message, badRequest);
  }
}
module.exports = {
  searchBook,
  getAllBook,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  scrapeBook,
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
