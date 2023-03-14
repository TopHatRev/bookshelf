const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new instance of a cat object and add to the DB
  await Book.create({
    title: "Gone",
    author: "Micheal Grant",
    year: "2008",
    countryOfOrigin: "Usa",
    description: "action book",
    status: "yes",
  });

  console.log("Created a new book");

  mongoose.disconnect();
}

seed();
