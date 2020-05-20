import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
  const todos = ["Go to market", "Buy food", "Make dinner"];
  const lists = [];
  for (var todo of todos) {
    let list = <li>{todo}</li>;
    lists.push(list);
  }
  const App = React.createElement("ul", null, ...lists);
  const todoItems = document.getElementById("todoItems");
    return (
      <div className="todoItems">
        <p>go to school</p>
      </div>
    );
  }
  
}

export default TodoItem;
