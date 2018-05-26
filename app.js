const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const bookRoutes = require('./api/routes/BooksRoute');

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    next();
  });

//Routes
app.use('/api/books', bookRoutes);

module.exports = app;