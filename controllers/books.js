//Models
const { getAllBooks, getBook, createBook } = require('../models/books');

//Error Controller
const { getResponse, getError } = require('./error');

//Access to all books
exports.getAllBooks = async (req, res, next) => {
  try {
    const [allBooks] = await getAllBooks();

    getResponse(res, allBooks);
  } catch (err) {
    getError(err, res);
  }
};

//Accessing the book of the relevant id
exports.getBook = async (req, res, next) => {
  try {
    const book = await getBook(req.params.id);

    getResponse(res, book[0]);
  } catch (err) {
    getError(err, res);
  }
};

//Book creation
exports.createBook = async (req, res) => {
  try {
    await createBook(req.body.name, 0);

    res.status(200).json({
      message: 'İşlem başarılı!',
    });
  } catch (err) {
    getError(err, res);
  }
};
