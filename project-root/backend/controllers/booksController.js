// For demo we load a static JSON file. Replace with DB access as needed.
const books = require('../data/books.json');

exports.getBooks = (req, res) => {
  res.json(books);
};
