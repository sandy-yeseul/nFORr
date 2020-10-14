const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res)=>{
    Book.get(function(err, books){
        if(err)  res.json({success: false, err});
        res.json({success: true, message: "Successfully get book list", data: books});
    })
})
router.get('/:bookId', async (req, res) =>{
    try{
        const book = await Book.findById(req.params.bookId);
        res.json({success: true, message: "successfully get book", book});
    } catch (err){
        res.json({success: false, message: "error to find a book",err});
    }
});
router.patch('/:bookId', async(req, res) => {
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
    try{
        const updatedBook = await Book.updateOne(
            {_id: req.params.bookId},
            // REVIEW should i repeat all the steps i had?
            { $set: {title: req.body.title}});
            res.json({success: true, message: "successfully udpated", updatedBook});
    } catch(err) {
        res.json({success: false, message: "error to find a book",data:err})
    }
})
router.delete('/:bookId', async (req, res)=>{
    try{
        const removedBook = await Book.remove({_id: req.params.bookId});
        res.status(201).json({success: true, message:"successfully deleted", data:removedBook});
    } catch(err){
        res.json({success: false, message:"error on deleting book", data:err});
    }
})

module.exports = router;