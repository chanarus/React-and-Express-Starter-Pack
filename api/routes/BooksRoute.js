const express = require('express');
const router = express.Router();

const BooksController = require('../controllers/BooksController');

router.route('/')
    .get(BooksController.getAllBooks);

module.exports = router;