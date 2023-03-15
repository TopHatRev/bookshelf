require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./books");
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json()); // allows us access to the request.body

// connect to the database (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

// READ
app.get("/book", async (request, response) => {
  console.log("Query String: ", request.query); // { color: "black" }

  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const books = await Book.find(request.query);
    response.status(200).json(books);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// CREATE
app.post("/book", async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(200).json(newBook);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// DELETE
app.delete("/book/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedBook = await Book.findByIdAndDelete(id);
    response.status(200).send(deletedBook);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
});
// UPDATE
app.put("/book/:id", async (request, response) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

/*
  Query
  /book?location=Leicester
  Params
  /books/leicester
  Body (in the call on the front end)
  { location: "Leicester" }
*/
