const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, min: 1500, max: new Date().getFullYear() },
  isbn: { type: String, unique: true, sparse: true },
  price: { type: Number, min: 0, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
