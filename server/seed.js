const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new instance of a cat object and add to the DB
  await Book.create({
    name: "Dusty Blackwell",
    author: "black",
    releaseYear: "2020",
    countryOfOrigin: "Norwich",
  });
  console.log("Created a new cat");

  mongoose.disconnect();
}

seed();
