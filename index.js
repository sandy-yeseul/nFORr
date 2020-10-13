const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/book');
const { json } = require('body-parser');
const app = express();
const port = 3028;

mongoose.connect('mongodb+srv://Dalga:4nightMare4@cluster0.a3rfz.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
    .then(()=> console.log('Mongodb Connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.get('/', (req, res) =>{
    res.send('hello,,,,')
});
//ANCHOR add book
app.post('/book', (req, res) =>{
    const book = new Book(req.body);
    book.save((err, book) =>{
        if(err) return res.json({success: false, err});
        return res.status(201).json({success: true, book})
    })
})
//ANCHOR view book list
app.get('/book', (req, res)=>{
    Book.get(function(err, books){
        if(err) return res.json({success: false, err});
        return res.json({success: true, message: "Successfully get book list", data: books});
    })
})
//ANCHOR view a book
app.get('/book/:bookId', (req, res) =>{
    Book.findOne(req.params.bookId, (err, book)=>{
        if(err) return res.json({success: false, err});
        return res.json({success: true, message: "Successfully get requested book: ", data: book})
    });
});
//ANCHOR edit book
app.patch('/book/:bookId', (req, res) => {
    // REVIEW why req.param.id? why not req.params.id? params <- cause error cannot find book
    Book.findOne(req.params.bookId, (err, book) =>{
        if(err) return res.json({success: false, message: "error to find a book",data:err});
        //REVIEW  check this
        book.title = req.body.title ? req.body.title : book.title;
        book.author = req.body.author ? req.body.author : book.author;
        book.publisher = req.body.publisher ? req.body.publisher : book.publisher;
        book.seller = req.body.seller ? req.body.seller : book.seller;
        book.price = req.body.price ? req.body.price : book.price;
        book.publishDate = req.body.publishDate ? req.body.publishDate : book.publishDate;

        book.save((err, book) =>{
            if(err) res.json({success: false, message: "error to save a book",data:err});
            return res.status(201).json({success: true, message: "SUccessfully updated book:", book})
        })
    });
})
//ANCHOR delete book
app.delete('/book/:bookId', async (req, res)=>{
    try{
        const removedBook = await Book.remove({_id: req.params.bookId});
        res.status(201).json({success: true, message:"successfully deleted", data:removedBook});
    } catch(err){
        res.json({success: false, message:"error on deleting book", data:err});
    }
})
app.listen(port, () => console.log(`Portfolio application on port ${port}`)); 