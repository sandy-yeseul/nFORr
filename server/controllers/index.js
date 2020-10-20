const Book = require('../models/book');
async function getBooksController(httpRequest){
    console.log('not in search');
   
    try{
        const books = await Book.find()
        // console.log(books);
        
        const data = await {
            body: books,
            code: 200
        }
        // console.log(`${data.body} \nreturning in controller`);
        return data
    } catch(err){
        console.log('error when find book')
    }
}
async function getBookController(httpRequest){
    const id = await httpRequest.params.bookId
    try {
        const book = await Book.findById(id);
        console.log('got book');
        const data = await{
            body: book,
            code: 200
        }
        return data;
    } catch(err){
        const data = await {
            body: err,
            code: 400
        }
        return data;
    }
}
async function postBookController(httpRequest){
    try{
        const book = await new Book(httpRequest.body);
        //TODO it doesn't work
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
        const savedBook = await book.save();
        console.log("Added book");
        const data = {
            body: savedBook,
            code: 201
        }
        return data
    } catch(err){
        const data = {
            body: "Failed to add a book",
            code: 400
        }
        return data;
    }
}
async  function putBookController(httpRequest){
    const id = await httpRequest.params.bookId;
    const item = {
        title: httpRequest.body.title,
        author: httpRequest.body.author,
        publisher: httpRequest.body.publisher,
        seller: httpRequest.body.seller,
        price: httpRequest.body.price,
        publishDate: httpRequest.body.publishDate 
    }
     try{
        const updatedBook = await Book.updateOne(
            {_id: id},
            { $set: item});
            console.log("Udpated");
            const data ={
                body: updatedBook,
                code: 201
            }
            return data;
     } catch(err) {
        console.log("error to find a book");
        const data = {
            body: err,
            code: 400
        }
        return data
     }
}
async  function deleteBookController(httpRequest){
    const id = httpRequest.params.bookId;
    try{
        const removedBook = await Book.deleteOne({_id: id});
        console.log("Deleted");
        const data = {
            body: removedBook,
            code: 201
        }
        return data;
    } catch(err){
        const data = {
            body: "error on deleting book",
            code: 400
        }
        return data;
    }
}

module.exports = {getBooksController, getBookController, postBookController, putBookController, deleteBookController};