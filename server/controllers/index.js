const BookDb = require('../data-access/index');
const makeBook = require('../book');
async function getBooksController(httpRequest) {
  const author = httpRequest.query.author;
  if(author){
    try {
      let dbBooks = await BookDb.findOne({author: author});
      console.log(dbBooks);
      let books = [];
      // TODO make it separated function
      // for(let i=0; i<Object.keys(dbBooks).length; i++){
      //   books[i] = makeBook(dbBooks[i]);
      // }
      const data = await {
        body: dbBooks,
        code: 200,
      };
      return data;
    } catch(err){
      console.log(err);
      const data = {
        body: err,
        code: 400
      }
      return data;
    }
  } else {
    console.log("not in search");
    try {
      let dBbooks = await BookDb.findAll();
      let books = [];
      // TODO make it separated function
      for(let i=0; i<Object.keys(dBbooks).length; i++){
        books[i] = makeBook(dBbooks[i]);
      }
      const data = await {
        body: books,
        code: 200,
      };
      return data;
    } catch (err) {
      console.log('failed to get book list')
      const data = await {
        body: err,
        code: 400
      }
      return data;
    }
  }
}
async function getBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  try {
    let dBbook = await BookDb.findById(id);
    const book = makeBook(dBbook);
    const data = await {
      body: book,
      code: 200,
    };
    return data;
  } catch (err) {
    console.log('failed get book')
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
    let dBsavedBook = await BookDb.insert(book);
    const savedBook = makeBook(dBsavedBook);
    const data = {
      body: savedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log('failed to add book')
    const data = {
      body: err,
      code: 400,
    };
    return data;
  }
}
async function putBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  const item = makeBook(httpRequest.body);
  // TODO optimize edit book(copy?)
  let test ={
    title: item.title,
    author: item.author,
    publisher: item.publisher,
    publishDate : item.publishDate,
    seller: item.seller,
    price: item.price
  }
  try {
    let dBupdatedBook = await BookDb.update(id, test);
    let updatedBook = makeBook(dBupdatedBook);
    const data = {
      body: updatedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log("failed to edit book");
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
    let dBremovedBook = await BookDb.remove(id);
    const removedBook = makeBook(dBremovedBook);
    const data = {
      body: removedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log('failed to delete book')
    const data = {
      body: err,
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
