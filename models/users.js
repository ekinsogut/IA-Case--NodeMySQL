//DB Connection
const db = require('../util/database');

//User Class and Queries
module.exports = class User {
  static getAllUsers() {
    return db.execute('SELECT id, name FROM users ORDER BY id DESC');
  }

  static getUser(id) {
    return db.execute('SELECT * FROM users WHERE id = ?', [id]);
  }

  static createUser(name) {
    return db.execute('INSERT INTO users (name) VALUES (?)', [name]);
  }

  static createPresent(userID, bookID) {
    return db.execute('INSERT INTO present (user_id, books_id) VALUES (?,?)', [
      userID,
      bookID,
    ]);
  }

  static searchPresent(bookID) {
    return db.execute('SELECT * FROM present WHERE books_id = ?', [bookID]);
  }

  static deletePresent(userID, bookID) {
    return db.execute(
      'DELETE FROM present WHERE user_id = ? AND  books_id = ? ',
      [userID, bookID]
    );
  }

  static createPast(userID, bookID, score) {
    return db.execute(
      'INSERT INTO past (user_id, books_id,score) VALUES (?,?,?)',
      [userID, bookID, score]
    );
  }
};
