const BookDb = require("../data-access/index");
const makeBook = require("../book");
async function getBooksController(httpRequest) {
  const author = httpRequest.query.author;
  if (author) {
    try {
      const dbBooks = await BookDb.findAllCondtion({ author: author });
      const books = [];
      for (let i = 0; i < dbBooks.length; i++) {
        books.push(makeBook(dbBooks[i]));
      }
      const data = await {
        body: books,
        code: 200,
      };
      return data;
    } catch (err) {
      console.log(err);
      const data = {
        body: err,
        code: 400,
      };
      return data;
    }
  } else {
    console.log("not in search");
    try {
      let dBbooks = await BookDb.findAll();
      let books = [];
      // TODO make it separated function
      for (let i = 0; i < Object.keys(dBbooks).length; i++) {
        books[i] = makeBook(dBbooks[i]);
      }
      const data = await {
        body: books,
        code: 200,
      };
      return data;
    } catch (err) {
      console.log("failed to get book list");
      const data = await {
        body: err,
        code: 400,
      };
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
    console.log("failed get book");
    const data = await {
      body: err,
      code: 400,
    };
    return data;
  }
}
async function postBookController(httpRequest) {
  try {
    const book = await makeBook(httpRequest.body);
    //ANCHOR validation
    const author = await book.author;
    const title = await book.title;
    //FIXME need to be separated 
    try{
        const findDuplicate = await BookDb.findOne({author: author});
        if(findDuplicate.title == title) throw new Error("Duplicate can't be stored");
    } catch(err){
        const data ={
            body: err,
            code: 409
        }
        return data;
    }
    const savedBook = await BookDb.insert(book);
    const formattedBook = makeBook(savedBook);
    const data = {
      body: formattedBook,
      code: 201,
    };
    return data;
  } catch (err) {
    console.log("failed to add book");
    const data = {
      body: err,
      code: 400,
    };
    return data;
  }
}
async function putBookController(httpRequest) {
  const id = await httpRequest.params.bookId;
  const book = makeBook(httpRequest.body);
  let removeIdBook = {
    ...book,
  };
  delete removeIdBook._id;
  try {
    const updatedBook = await BookDb.update(id, removeIdBook);
    const formattedBook = makeBook(updatedBook);
    const data = {
      body: formattedBook,
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
    console.log("failed to delete book");
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
