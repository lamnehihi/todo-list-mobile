import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Go to market", isComplete: true },
      { title: "Buy food" , isComplete: true},
      { title: "Make dinner" },
    ];
  }
  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 && this.todoItems.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
        {
          this.todoItems.length === 0 && <p>Nothing here!</p>
        }
      </div>
    );
  }
}

export default App;
