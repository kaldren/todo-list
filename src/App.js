import React, { Component } from "react";
import TodoList from "./components/todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App main container">
        <TodoList />
      </div>
    );
  }
}

export default App;
