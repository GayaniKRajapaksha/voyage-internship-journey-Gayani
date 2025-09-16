const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  publishedDate: { type: Date },
  pages: { type: Number, min: 1 },
  isbn: { type: String, unique: true, sparse: true },
  genres: [String],
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
