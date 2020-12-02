const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {upload} = require('./server/callback/Middleware')
const callback = require("./server/callback");
const {
  getBooksController,
  getBookController,
  postBookController,
  putBookController,
  deleteBookController,
  scrapeBookController,
} = require("./server/controllers/index");

const {makeDb} = require('./server/data-access/index');
const app = express();
const port = process.env.PORT;

makeDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.post('*', upload.single('image'), (req, res, next) =>{
  if(req.file) req.body.image = `image/${req.file.filename}`
  next();
})
app.put('*', upload.single('image'), (req, res, next) =>{
  if(req.file) req.body.image = `image/${req.file.filename}`
  next();
})
app.use('/image', express.static('./uploads'));

// FOR TEST
// app.get("/", async(req, res) =>{
//   var obj = {title: "이해", author: "포기", price:"0.2", publishDate: "December 17, 2010"}
//   var lobj = makeBook(obj);
//   console.log(lobj)
//   var newBook = await new Book(lobj);
//   var savedBook = await newBook.save();
//   console.log(savedBook)
//   var finalbook = makeBook(savedBook);
//   console.log(finalbook);
// });
app.get("/books", callback(getBooksController));
app.get("/books/:bookId", callback(getBookController));
app.post("/books", callback(postBookController));
app.put("/books/:bookId", callback(putBookController));
app.delete("/books/:bookId", callback(deleteBookController));
app.get('/scrape', callback(scrapeBookController))

app.listen(port, () => console.log(`Portfolio application on port ${port}`));
