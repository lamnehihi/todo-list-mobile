import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["Go to market", "Buy food", "Make dinner"];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.todoItems.map((item, index) => <TodoItem key={index} title={item}/>)  
          }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
