const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const bookRouter = require('./routes/bookRouter');
const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
    .then(()=> console.log('Mongodb Connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// routes
app.get('/', (req, res) =>{
    res.send('hello,,,,')
});
app.use('/book', bookRouter);

app.listen(port, () => console.log(`Portfolio application on port ${port}`)); 