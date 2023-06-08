import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import UserList from "./Components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
        <Counter />
      </header>
    </div>
  );
}

export default App;
