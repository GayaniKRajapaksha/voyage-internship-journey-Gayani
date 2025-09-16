const Book = require('../models/Book');
const mongoose = require('mongoose');

exports.createBook = async (req, res, next) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201)
       .location(`/api/books/${book._id}`)
       .json(book);
  } catch (err) { next(err); }
};

exports.getBooks = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, author, title, genre, available, sort = '-createdAt' } = req.query;
    const q = {};
    if (author) q.author = new RegExp(author, 'i');
    if (title)  q.title  = new RegExp(title, 'i');
    if (genre)  q.genres = genre;
    if (available !== undefined) q.available = available === 'true';

    const skip = (page - 1) * limit;
    const [total, data] = await Promise.all([
      Book.countDocuments(q),
      Book.find(q).sort(sort).skip(parseInt(skip)).limit(parseInt(limit))
    ]);

    res.json({ meta: { page: parseInt(page), limit: parseInt(limit), total }, data });
  } catch (err) { next(err); }
};

exports.getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id' });
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
  } catch (err) { next(err); }
};

exports.updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id' });
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.json(book);
  } catch (err) { next(err); }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid id' });
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.status(204).send();
  } catch (err) { next(err); }
};
