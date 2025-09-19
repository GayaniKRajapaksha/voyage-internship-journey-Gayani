require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/Book');

const sampleBooks = [
  { title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008, isbn: "9780132350884", price: 30 },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", publishedYear: 2018, isbn: "9781593279509", price: 25 }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Book.deleteMany({});
    await Book.insertMany(sampleBooks);
    console.log("✅ Seed data inserted");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
})();
