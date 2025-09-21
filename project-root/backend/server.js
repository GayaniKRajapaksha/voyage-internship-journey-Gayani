require('dotenv').config();
const express = require('express');
const cors = require('cors');

const booksRouter = require('./routes/books');

const app = express();
app.use(cors());            // enable CORS for dev
app.use(express.json());

/**
 * API base: /api
 * route for books will be: GET http://localhost:5000/api/books
 */
app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Books API listening on ${PORT}`));
