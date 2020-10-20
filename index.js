const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const callback = require("./server/callback");
const {
  getBooksController,
  getBookController,
  postBookController,
  putBookController,
  deleteBookController,
} = require("./server/controllers/index");
const {makeDb} = require('./server/data-access/index');
const app = express();
const port = process.env.PORT;

// mongoose
//   .connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   })
//   .then(() => console.log("Mongodb Connected..."))
//   .catch((err) => console.log(err));
makeDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", callback());
app.get("/books", callback(getBooksController));
app.get("/books/:bookId", callback(getBookController));
app.post("/books", callback(postBookController));
app.put("/books/:bookId", callback(putBookController));
app.delete("/books/:bookId", callback(deleteBookController));

app.listen(port, () => console.log(`Portfolio application on port ${port}`));
