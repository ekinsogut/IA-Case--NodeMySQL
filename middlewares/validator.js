//Modules
const { check, validationResult } = require('express-validator');

//Name validator for create user
exports.validateUser = [
  check('name', 'Name is required!').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

//Name validator for create book
exports.validateBook = [
  check('name', 'Name is required!').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

//Score validator for return book
exports.validateScore = [
  check('score', 'Score is required!').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
