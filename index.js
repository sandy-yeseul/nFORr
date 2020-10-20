const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const callback = require('./server/callback');
const {getBooksController, getBookController, postBookController, putBookController, deleteBookController} = require('./server/controllers/index');
const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
    .then(()=> console.log('Mongodb Connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

// routes
// REVIEW do i need this?
// app.get('/', (req, res) =>{
//     res.status(200).send(`hello... the server is listening at ${port}`);
// });
app.get('/', callback());
app.get('/books', callback(getBooksController))
app.get('/books/:bookId', callback(getBookController))
app.post('/books', callback(postBookController))
app.put('/books/:bookId', callback(putBookController))
app.delete('/books/:bookId', callback(deleteBookController))
// app.get('/books', callback(get))
// const Book = require('../models/book');
/*

app.delete('/books/:bookId', async (req, res)=>{
    try{
        const id =  req.params.bookId
        const removedBook = await Book.deleteOne({_id: id});
        console.log("Deleted")
        res.status(201).json({data:removedBook});
    } catch(err){
        console.log("error on deleting book");
        res.status(400).json({data:err});
    }
})
*/
app.listen(port, () => console.log(`Portfolio application on port ${port}`)); 