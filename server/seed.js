const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new instance of a cat object and add to the DB
  await Book.create({
    title: "Gone",
    description: "action book",
    status: "yes",
  });
  await Book.create({
    title: "american Psycho",
    description: "mean rich guy",
    status: "yes",
  });
  await Book.create({
    title: "Salo of the 120 days of sodom",
    description: "4 rich men buy humans",
    status: "yes",
  });
  console.log("Created a new book");

  mongoose.disconnect();
}

seed();
