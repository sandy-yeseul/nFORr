const {searchBook, getAllBook, getBook, addBook, updateBook, deleteBook} = require('../use-cases');
async function getBooksController(httpRequest) {
  const searchQuery = httpRequest.query.author;
  if (searchQuery) {
    return searchBook(searchQuery);
  } else {
    return getAllBook();
  }
}
async function getBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  return getBook(id);
}
async function postBookController(httpRequest) {
  return addBook(httpRequest.body);
}
async function putBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  return updateBook(id, httpRequest.body);
}
async function deleteBookController(httpRequest) {
  const id = httpRequest.params.bookId;
  return deleteBook(id);
}

module.exports = {
  getBooksController,
  getBookController,
  postBookController,
  putBookController,
  deleteBookController,
};
