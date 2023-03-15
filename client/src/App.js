import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BookDetails from "./BookDetails";

function App() {
  const [book, setBook] = useState([]);
  const [bookLocation, setBookLocation] = useState("");
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    countryOfOrigin: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    getBook();
  }, [bookLocation]);

  async function getBook() {
    let API = "http://localhost:8080/books";

    if (bookLocation !== "") {
      API = API + "?location=" + bookLocation;
    }
    const res = await axios.get(API);
    setBook(res.data);
  }

  function handleLocation(event) {
    setBookLocation(event.target.value);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleAddBook(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, form);

    // add our new cat to the page
    const newBookList = [...book, res.data];
    setBook(newBookList);

    // reset the form
    setForm({
      title: "",
      author: "",
      year: "",
      countryOfOrigin: "",
      description: "",
      status: "",
    });
  }

  async function deleteBook(id, name) {
    const confirmDelete = window.confirm(`Are you sure you want to permantently delete ${name}?`);
    if (confirmDelete) {
      const API = `http://localhost:8080/books/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getBook();
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Books</h1>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleLocation={handleLocation}
                location={bookLocation}
                book={book}
                deleteBook={deleteBook}
                handleAddBook={handleAddBook}
                form={form}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
        <p>This is the footer</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
