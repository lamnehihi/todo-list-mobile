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
        { title: "Work out", isComplete: true },
        { title: "Có làm thì mới có ăn" },
        { title: "Không làm mà đòi có ăn" },
        { title: "Thì ăn gì ?" },
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

  itemDelete(item) {
    return (event) => {
      const todoItems = this.state.todoItems;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
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
        newItem: "",
        todoItems: [{ title: value.trim() }, ...this.state.todoItems],
      });
      event.target.value = "";
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="container">
        <h1>DAILIST</h1>
        <div className="App">
          <div className="upcoming section">
            <div className="todos">
              {todoItems.length > 0 && <span className="span">UPCOMING</span>}
              {todoItems.length > 0 &&
                todoItems
                  .filter((item) => !item.isComplete)
                  .map((item, index) => (
                    <TodoItem
                      key={index}
                      item={item}
                      index={index}
                      onClick={this.itemClick(item)}
                      onClickDelete={this.itemDelete(item)}
                    />
                  ))}
            </div>
          </div>
          <div className="finished section">
            <div className="todos">
              {todoItems.length > 0 && <span className="span">FINISHED</span>}
              {todoItems.length > 0 &&
                todoItems
                  .filter((item) => item.isComplete)
                  .map((item, index) => (
                    <TodoItem
                      key={index}
                      item={item}
                      index={index}
                      onClick={this.itemClick(item)}
                      onClickDelete={this.itemDelete(item)}
                    />
                  ))}
            </div>
          </div>
          {todoItems.length === 0 && <p>Nothing here!</p>}
          <div className="input">
            <img src={downArrow} />
            <input
              type="text"
              placeholder="What needs to be done?"
              value={this.state.newItem}
              onChange={this.onChange}
              onKeyUp={this.addItem}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
