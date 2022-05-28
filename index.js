//Modules
const express = require('express');

//Routes
const books = require('./routes/books');
const users = require('./routes/users');

const app = express();

const ports = process.env.PORT || 3000;

app.use(express.json({ extended: false }));

//Routing
app.use('/books', books);
app.use('/users', users);

app.listen(ports, () => console.log(`Listening on port ${ports}`));
