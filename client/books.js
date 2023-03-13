const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  status: Boolean,
});

const book = mongoose.model("book", bookSchema);

module.exports = book;
