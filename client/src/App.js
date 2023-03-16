import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages//Home/Home";
import BookDetails from "./BookDetails";

function App() {
  const [books, setBooks] = useState([]);
  const [location, setLocation] = useState("");
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    countryOfOrigin: "",
    description: "",
    status: "",
  });
  // shdwagsd
  useEffect(() => {
    getBooks();
  }, [location]);

  async function getBooks() {
    let API = "http://localhost:8080/books";

    if (location !== "") {
      API = API + "?location=" + location;
    }
    const res = await axios.get(API);
    setBooks(res.data);
  }

  function handleLocation(event) {
    setLocation(event.target.value);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleAddBook(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, form);

    // add our new cat to the page
    const newBooksList = [...books, res.data];
    setBooks(newBooksList);

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
      getBooks();
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
                location={location}
                books={books}
                deleteCat={deleteBook}
                handleAddCat={handleAddBook}
                form={form}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
        <p>This is the footer</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
