const express = require('express');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const busboy = require('busboy');   // used for multiform file parsing

const app = express();  // Creates express object

// Create middleware for accessing index.js
const indexRouter = require('./routes/index');

// Midldleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.use("/scripts", express.static(path.join(__dirname, 'public/scripts')));
app.use("/style", express.static(path.join(__dirname, 'public/style')));

// sets up views
app.set('views', './views');
app.set('view engine', 'ejs');


// Sets route to root to index.js
app.use('/', indexRouter);

// Middleware to make a 404 error
app.use(function(err,req,res,next)
{
    next(createError(404, err));
})

// Middleware to handle more errors
app.use(function(err, req, res,next){
    console.log(`error ${err.message}`)
    console.error(err.stack);

    res.status(err.status || 500);
})

module.exports = app;
