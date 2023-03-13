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
    name: "American psycho",
    description: "rich man does bad",
    status: "yes",
  });
  await Book.create({
    name: "Salo or the 120 days of sodom",
    description: "4 rich men buy people",
    status: "yes",
  });
  console.log("Created a new book");

  mongoose.disconnect();
}

seed();
