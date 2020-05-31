import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems : [
        { title: "Go to market", isComplete: true },
        { title: "Buy food" , isComplete: true},
        { title: "Make dinner" },
      ]
    }
  }
  itemClick() {
    this.setState({
      todoItems : [
        this.props.item.isComplete = !this.props.item.isComplete
      ]
    });
  }
  render() {
    const todoItems = this.state.todoItems;
    return (
      <div className="App">
        {
          todoItems.length > 0 && todoItems.map((item, index) => (
          <TodoItem key={index} item={item} onClick={this.itemClick}/>
        ))}
        {
          todoItems.length === 0 && <p>Nothing here!</p>
        }
      </div>
    );
  }
}

export default App;
