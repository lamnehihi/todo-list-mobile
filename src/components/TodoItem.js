import React, {Component} from 'react';
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const item = this.props.item;
    const classNames = require('classnames');
    let className= "TodoItem";
    if(item.isComplete) {
      className = classNames(className, ' TodoItem-complete');
    }
    return (
      <div onClick={this.props.onClick.bind(this)} className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
  
}

export default TodoItem;
