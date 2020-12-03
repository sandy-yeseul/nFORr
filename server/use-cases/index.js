const BookDb = require("../data-access/index");
const makeBook = require("../book");
const { scraper } = require("./scraper");

const successOk = 200;
const successCreate = 201;
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
async function scrapeBook() {
  const title ="도레미파솔라시도"
  
  const oh = { title: "클린 코드", author: "로버트마틴" };
  const sample = await scraper(oh);
  return formatData(sample, successOk);
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
