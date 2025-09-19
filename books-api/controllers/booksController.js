const mongoose = require('mongoose');
const Book = require('../models/Book');

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error('Error fetching books:', err.message);
    res.status(500).json({ message: 'Server error while fetching books' });
  }
};

// Get book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: 'Invalid book ID' });

    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.json(book);
  } catch (err) {
    console.error('Error fetching book:', err.message);
    res.status(500).json({ message: 'Server error while fetching book' });
  }
};

// Create a book
exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, isbn, price } = req.body;

    // Basic validation
    if (!title || !author) {
      return res.status(400).json({ message: 'Title and author are required' });
    }

    // Check for duplicate ISBN if provided
    if (isbn) {
      const existing = await Book.findOne({ isbn });
      if (existing) return res.status(400).json({ message: 'ISBN already exists' });
    }

    const book = new Book({ title, author, publishedYear, isbn, price });
    const savedBook = await book.save();
    res.status(201).json(savedBook);

  } catch (err) {
    console.error('Error creating book:', err.message);
    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error while creating book' });
  }
};

// Update book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: 'Invalid book ID' });

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    res.json(updatedBook);
  } catch (err) {
    console.error('Error updating book:', err.message);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'Server error while updating book' });
  }
};

// Delete book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: 'Invalid book ID' });

    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });

    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error('Error deleting book:', err.message);
    res.status(500).json({ message: 'Server error while deleting book' });
  }
};
