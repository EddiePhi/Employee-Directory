import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [jim, setJim] = useState({
    name: "Jim",
    age: 28
  });

  return (
    <div className="App">
      <h1>Hello {jim.name}</h1>
      <button type="button" onClick={() => setJim({ ...jim, name: "A Rock" })}>
        Change name to A Rock
      </button>
      <h2>I am {jim.age} years old</h2>
      <button
        type="button"
        onClick={() => setJim({ ...jim, age: jim.age + 1 })}
      >
        Make old and sad
      </button>
    </div>
  );
}
