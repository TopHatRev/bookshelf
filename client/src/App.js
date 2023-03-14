import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header-h1">Bookshelf</h1>
      <div className="input-section">
        <input type="text" placeholder="Input Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Description" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Author" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Release Year" className="input input-bordered w-full max-w-xs" />
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default App;
