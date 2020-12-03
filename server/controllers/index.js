const {
  searchBook,
  getAllBook,
  getBook,
  addBook,
  updateBook,
  deleteBook,
  scrapeBook,
} = require("../use-cases");
function getBooksController(httpRequest) {
  const searchQuery = httpRequest.query.author;
  if (searchQuery) {
    return searchBook(searchQuery);
  } else {
    return getAllBook();
  }
}
function getBookController(httpRequest) {
  const id = httpRequest.params.bookId;
  return getBook(id);
}
function postBookController(httpRequest) {
  return addBook(httpRequest.body);
}
function putBookController(httpRequest) {
  const id = httpRequest.params.bookId;
  return updateBook(id, httpRequest.body);
}
function deleteBookController(httpRequest) {
  const id = httpRequest.params.bookId;
  return deleteBook(id);
}
function scrapeBookController(httpRequest) {
  return scrapeBook(httpRequest.body);
}

module.exports = {
  getBooksController,
  getBookController,
  postBookController,
  putBookController,
  deleteBookController,
  scrapeBookController,
};
