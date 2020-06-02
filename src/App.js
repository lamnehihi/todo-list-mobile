import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { render } from "@testing-library/react";
import downArrow from "./down-arrow.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: "Go to market", isComplete: true },
        { title: "Buy food", isComplete: true },
        { title: "Make dinner" },
      ],
    };

    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
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

  addItem(event) {
    if (event.keyCode === 13) {
      const value = event.target.value;
      if (value === "") return;
      if (value.trim() === "") return;
      this.setState({
        newItem : '',
        todoItems: [{ title: value.trim() }, ...this.state.todoItems],
      });
      event.target.value = "";
    }
  }

  onChange(event) {
    this.setState({
      newItem : event.target.value
    });
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div>
        <h1>todos</h1>
        <div className="App">
          <div className="input">
            <img src={downArrow}/>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={this.state.newItem}
              onChange={this.onChange}
              onKeyUp={this.addItem}
            ></input>
          </div>
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
