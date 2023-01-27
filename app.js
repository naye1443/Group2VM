const express = require('express');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');

const app = express();  // Creates express object

// Create middleware for accessing index.js
const indexRouter = require('./routes/index');

// Midldleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));


// Sets route to root to index.js
app.use('/', indexRouter);

// Middleware for handling 404 errors
app.use(function(req, res, next) 
{
    next(createError(404));
})

// Middleware for handling validation errors
app.use(function(err, req, res, next)
 {
    if (err.name === 'ValidationError') 
    {
    res.status(400).send(err.message);
    } else {
    next(err);
    }
});

// Middleware for handling server errors
app.use(function(err, req, res, next)
 {
    res.status(err.status || 500);
    res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
    });
});
