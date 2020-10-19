const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const callback = require('./server/callback');
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
// app.get('/books', callback(get))
// const Book = require('../models/book');
/*
app.get('/books/', (req, res)=>{
    try{
        // let title = req.query.title;
        //TODO later set if user search search both title and author
        let author = req.query.author;
        if(!(author)){
            console.log('not in search')
            Book.get(function(err, books){
                if(err) res.status(500).json({data:err});
                console.log("Got book list");
                res.status(200).json({data: books});
            })
        } else {
            console.log(`in search: ${author}`)
            Book.find({author: `${author}`}, (err, books) =>{
                if(err) res.status(500).json({data:err});
                res.status(200).json({data: books});
            })
        }
    } catch(err){
        console.log("some error in getting list of books")
    }
})
app.get('/books/:bookId', async (req, res) =>{
    try{
        const book = await Book.findById(req.params.bookId);
        console.log("Got book")
        res.status(200).json({data:book});
    } catch (err){
        console.log("error to find a book");
        res.status(500).json({data:err});
    }
});
app.post('/books/', async (req, res) =>{
    console.log(req.body)
    try{
        const book = new Book(req.body);
        const author = req.body.author;
        const title = req.body.title;
        try{
            const findDuplicate = await Book.findOne({author: author});
            if(findDuplicate.title == title) throw new Error("it's duplicated");
        } catch (err){
            return res.status(409).json({data:book});
        }
        const savedBook = await book.save();
        console.log("Added book");
        res.status(201).json({data:savedBook});
    } catch(err){
        console.log("failed to add a book")
        res.status(400).json({data:err})
    }
})
app.put('/books/:bookId', async(req, res) => {
    /*
    Book.findOne(req.params.bookId, (err, book) =>{
        if(err) res.json({success: false, message: "error to find a book",data:err});
        //REVIEW  check this
        book.title = req.body.title ? req.body.title : book.title;
        book.author = req.body.author ? req.body.author : book.author;
        book.publisher = req.body.publisher ? req.body.publisher : book.publisher;
        book.seller = req.body.seller ? req.body.seller : book.seller;
        book.price = req.body.price ? req.body.price : book.price;
        book.publishDate = req.body.publishDate ? req.body.publishDate : book.publishDate;

        book.save((err, book) =>{
            if(err) res.json({success: false, message: "error to save a book",data:err});
            res.status(201).json({success: true, message: "SUccessfully updated book:", book})
        })
    });
    */
   /*
   const id = req.params.bookId;
   const item = {
       title: req.body.title,
       author: req.body.author,
       publisher: req.body.publisher,
       seller: req.body.seller,
       price: req.body.price,
       publishDate: req.body.publishDate 
   }
    try{

        const updatedBook = await Book.updateOne(
            {_id: id},
            // REVIEW should i repeat all the steps i had?
            { $set: item});
            console.log("Udpated");
            res.status(201).json({data:updatedBook});
    } catch(err) {
        console.log("error to find a book");
        res.status(400).json({data:err})
    }
})
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