//Modules
const express = require('express');

//Controllers
const {
  getAllUsers,
  getUser,
  createUser,
  borrowBook,
  returnBook,
} = require('../controllers/users');

//Express validator
const { validateUser, validateScore } = require('../middlewares/validator');

const router = express.Router();

//Routes
router.route('/').get(getAllUsers);
router.route('/:id').get(getUser);
router.route('/').post(validateUser, createUser);
router.route('/:user_id/borrow/:book_id').post(borrowBook);
router.route('/:user_id/return/:book_id').post(validateScore, returnBook);

module.exports = router;
