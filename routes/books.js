//Modules
const express = require('express');

//Controllers
const { getAllBooks, getBook, createBook } = require('../controllers/books');

//Express Validator
const { validateBook } = require('../middlewares/validator');

const router = express.Router();

//Routes
router.route('/').get(getAllBooks);
router.route('/:id').get(getBook);
router.route('/').post(validateBook, createBook);

module.exports = router;
