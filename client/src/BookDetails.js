import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const [book, setBook] = useState({});
  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    countryOfOrigin: "",
    description: "",
    status: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `http://localhost:8080/book?_id=${id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  function handleChange(event) {
    // setForm({ ...form, [event.target.name]: event.target.value });
    const { name, value, type, checked } = event.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleUpdateBook(event) {
    event.preventDefault();
    const body = {};
    // go through property item in the object
    for (const prop in form) {
      // if the property is not empty, then add it to our body object
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }
    // so we end up with a body object which is only the fields the user has type in
    const API = `http://localhost:8080/book/${id}`;
    await axios.put(API, body);

    const newBook = { ...book, ...body };
    setBook(newBook);
  }

  return (
    <div>
      <h2>{book.name}</h2>
      <p>{book.location}</p>
      <p>{book.color}</p>
      <h3>Update details of Cat</h3>
      <form onSubmit={handleUpdateBook}>
        <input name="title" value={form.title} placeholder={book.title} onChange={handleChange} />
        <input name="location" value={form.author} placeholder={book.author} onChange={handleChange} />
        <input name="color" value={form.year} placeholder={book.year} onChange={handleChange} />
        <input name="color" value={form.countryOfOrigin} placeholder={book.countryOfOrigin} onChange={handleChange} />
        <input name="color" value={form.description} placeholder={book.description} onChange={handleChange} />
        <input name="color" value={form.status} placeholder={book.status} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
