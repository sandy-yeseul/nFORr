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
// function getBookController(httpRequest){
//     return {
//         body: 'data',
//         code: 200
//     }
// }
// function postBookController(httpRequest){
//     return {
//         body: 'data',
//         code: 201
//     }
// }
// function putBookController(httpRequest){
//     return{
//         body: 'data',
//         code: 201
//     }
// }
// function deleteBookController(httpRequest){
//     return{
//         body: 'data',
//         code: 200
//     }
// }
const controllers = Object.freeze({
    getBooksController
})
module.exports = controllers;
module.exports.getBooksController = getBooksController;
 /*
    // Book.get((err, books) =>{
    //     if(err) return {body: err, code: 400}
    //     console.log('got book list');
    //     //console.log(books)
    //     const data ={
    //         body: books, 
    //         code: 200
    //     }
    //     return data
    // })
    /
    */