//Models
const {
  getAllUsers,
  getUser,
  createUser,
  createPresent,
  searchPresent,
  deletePresent,
  createPast,
} = require('../models/users');
const { pastBook, updateScore } = require('../models/books');

//Error Controller
const { getResponse, getError } = require('./error');

//Access to all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const [allUsers] = await getAllUsers();

    getResponse(res, allUsers);
  } catch (err) {
    getError(err, res);
  }
};

//Accessing the user of the relevant id
exports.getUser = async (req, res, next) => {
  try {
    const user = await getUser(req.params.id);

    getResponse(res, user[0]);
  } catch (err) {
    getError(err, res);
  }
};

//User creation
exports.createUser = async (req, res) => {
  try {
    await createUser(req.body.name);

    res.status(200).json({
      message: 'İşlem başarılı!',
    });
  } catch (err) {
    getError(err, res);
  }
};

//Borrowing a book
exports.borrowBook = async (req, res) => {
  try {
    //Url params
    const userID = req.params.user_id;
    const bookID = req.params.book_id;

    //Searching for current book and user in present and users table
    const searchRes = await searchPresent(bookID);
    const userRes = await getUser(userID);

    //If there is no user..
    if (userRes[0].length === 0) {
      res.status(403).json({
        message: `İlgili id'ye sahip kullanıcı bulunamadı!`,
      });
    } else {
      //If there is a record of the relevant book in the present table..
      if (searchRes[0].length > 0) {
        res.status(403).json({
          message: 'İlgili kitap öncesinde ödünç alındı!',
        });
      } else {
        //Create borrow
        await createPresent(userID, bookID);

        res.status(200).json({
          message: 'İşlem başarılı!',
        });
      }
    }
  } catch (err) {
    getError(err, res);
  }
};

//Return the book
exports.returnBook = async (req, res) => {
  try {
    //Url params
    const userID = req.params.user_id;
    const bookID = req.params.book_id;
    const score = req.body.score;
    let total = 0;

    //Create past in past table
    await createPast(userID, bookID, score);

    //Delete present in present table
    await deletePresent(userID, bookID);

    //Getting the scores of the relevant book in the past table
    const book = await pastBook(bookID);
    const scores = book[0];

    for (let i = 0; i < scores.length; i++) {
      total += parseInt(scores[i].score);
    }

    //These scores are summed up and updated in the book table.
    await updateScore(total / scores.length, bookID);

    res.status(200).json({
      message: 'İşlem başarılı!',
    });
  } catch (err) {
    getError(err, res);
  }
};
