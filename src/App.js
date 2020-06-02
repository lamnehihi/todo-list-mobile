import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Go to market", isComplete: true },
        { title: "Buy food", isComplete: true },
        { title: "Make dinner" },
      ],
    };
  }
  itemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            title: item.title,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const todoItems = this.state.todoItems;
    return (
      <div >
        <h1>todos</h1>
        <div className="input">

        </div>
        <div className="App">
          {todoItems.length > 0 &&
            todoItems.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                onClick={this.itemClick(item)}
              />
            ))}
          {todoItems.length === 0 && <p>Nothing here!</p>}
        </div>
      </div>
    );
  }
}

export default App;
