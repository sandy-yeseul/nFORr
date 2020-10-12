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
app.post('/book', (req, res) =>{
    console.log(req.body);
    const book = new Book(req.body);
    book.save((err, book) =>{
        if(err) return res.json({success: false, err});
        return res.status(201).json({success: true, book})
    })
})
app.get('/book', (req, res)=>{
    Book.get(function(err, books){
        if(err) return res.json({success: false, err});
        return res.json({success: true, message: "Successfully get book list", data: books});
    })
})
app.listen(port, () => console.log(`Portfolio application on port ${port}`));
