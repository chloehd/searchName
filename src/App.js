import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [list, setList] = useState([]);

  const handleChange = value => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        res.json().then(data => {
          setList(data);
        });
      })
      .catch();
  };

  return (
    <div className="App">
      <h1>Search for people</h1>
      <Search onChange={handleChange} list={list} />
    </div>
  );
}

export default App;
