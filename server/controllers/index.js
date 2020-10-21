const BookDb = require('../data-access/index');
const makeBook = require('../book');
async function getBooksController(httpRequest) {
  console.log("not in search");
  try {
    let books = await BookDb.findAll();
    const data = await {
      body: books,
      code: 200,
    };
    return data;
  } catch (err) {
    console.log(err);
  }
}
async function getBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  try {
    let dBbook = await BookDb.findById(id);
    let book = makeBook(dBbook);
    const data = await {
      body: book,
      code: 200,
    };
    return data;
  } catch (err) {
    const data = await {
      body: err,
      code: 400,
    };
    return data;
  }
}
async function postBookController(httpRequest) {
  try {
    // const book = await new BookDb(httpRequest.body);
    const book= await makeBook(httpRequest.body);
    //FIXME it doesn't work
    // const author = await httpRequest.body.author;
    // const title = await httpRequest.body.title;
    // try{
    //     const findDuplicate = await Book.findOne({author: author});
    //     if(findDuplicate.title == title) throw new Error("Duplicate can't be stored");
    // } catch(err){
    //     const data ={
    //         body: err,
    //         code: 409
    //     }
    //     return data;
    // }
    const savedBook = await BookDb.insert(book);
    console.log("Added book");
    const data = {
      body: savedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    const data = {
      body: "Failed to add a book",
      code: 400,
    };
    return data;
  }
}
async function putBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  const item = makeBook(httpRequest.body);
  try {
    const updatedBook = await BookDb.update(id, item);
    console.log("Udpated");
    const data = {
      body: updatedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log("error to find a book");
    const data = {
      body: err,
      code: 400,
    };
    return data;
  }
}
async function deleteBookController(httpRequest) {
  const id = httpRequest.params.bookId;
  try {
    const removedBook = await BookDb.remove(id);
    const data = {
      body: removedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log(err)
    const data = {
      body: "error on deleting book",
      code: 400,
    };
    return data;
  }
}

module.exports = {
  getBooksController,
  getBookController,
  postBookController,
  putBookController,
  deleteBookController,
};
