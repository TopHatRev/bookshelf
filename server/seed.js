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
<<<<<<< HEAD

=======
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
>>>>>>> ca7d637f4c59c3f6dfa942f02ebda938d184a04e
  console.log("Created a new book");

  mongoose.disconnect();
}

seed();
