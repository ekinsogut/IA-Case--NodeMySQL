//DB Connection
const db = require('../util/database');

//Book Class and Queries
module.exports = class Books {
  static getAllBooks() {
    return db.execute('SELECT id , name FROM books ORDER BY id DESC');
  }

  static getBook(bookID) {
    return db.execute('SELECT * FROM books WHERE id = ?', [bookID]);
  }

  static createBook(name, score) {
    return db.execute('INSERT INTO books (name,score) VALUES (?,?)', [
      name,
      score,
    ]);
  }

  static pastBook(bookID) {
    return db.execute('SELECT score FROM past WHERE books_id = ?', [bookID]);
  }

  static updateScore(score, bookID) {
    return db.execute('UPDATE books SET score = ? WHERE id = ? ', [
      score,
      bookID,
    ]);
  }
};
