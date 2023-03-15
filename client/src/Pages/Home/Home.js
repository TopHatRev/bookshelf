export default function Home({
  handleLocation,
  countryOfOrigin,
  books,
  deleteBook,
  handleAddBook,
  form,
  handleChange,
}) {
  return (
    <div>
      <input
        onChange={handleLocation}
        value={countryOfOrigin}
        placeholder="Filter by Location"
      />
      {books.map((book, index) => {
        return (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>Location: {book.countryOfOrigin}</p>
            <p>author: {book.author}</p>
            <p>Year:{book.year}</p>
            <p>Description:{book.description}</p>
            <span onClick={() => deleteBook(book._id, book.title)}>X</span>
          </div>
        );
      })}
      <h2>Add a Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          title="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          title="color"
          value={form.author}
          onChange={handleChange}
          placeholder="Color"
        />
        <input
          title="countryOfOrigin"
          value={form.countryOfOrigin}
          onChange={handleChange}
          placeholder="Location"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
