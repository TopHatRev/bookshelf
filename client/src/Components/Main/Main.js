import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <div className="input-field">
        <input type="text" placeholder="Input Book Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Author Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Release Year" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Country of Origin" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Description" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Input Status" className="input input-bordered w-full max-w-xs" />
      </div>
    </div>
  );
}
