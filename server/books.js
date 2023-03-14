const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  author: String,
  year: String,
  countryOfOrigin: String,
  description: String,
  status: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
