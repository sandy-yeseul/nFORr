const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/book');
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
app.get('/book:id', (req, res) =>{
    Book.findOne(req.param.id, (err, book)=>{
        if(err) return res.json({success: false, err});
        return res.json({success: true, message: "Successfully get requested book: ", data: book})
    });
});
//ANCHOR edit book
//ANCHOR delete book
app.listen(port, () => console.log(`Portfolio application on port ${port}`)); 