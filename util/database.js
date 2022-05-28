//Modules
const mysql = require('mysql2');

//DB Informations
const {
  host,
  user,
  password,
  database,
  port,
} = require('../config/config.json');

//Create DB Connection
const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  port: port,
});

module.exports = pool.promise();
