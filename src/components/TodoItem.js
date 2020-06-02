import React, { Component } from "react";
import "./TodoItem.css";
import checkBox from "./success.svg";

class TodoItem extends Component {
  render() {
    const item = this.props.item;
    const classNames = require("classnames");
    let className = "TodoItem";
    if (item.isComplete) {
      className = classNames(className, " TodoItem-complete");
    }
    return (
      <div className={className}>
        {
          item.isComplete && <img src={checkBox} onClick={this.props.onClick} />
        }
        {
          item.isComplete !== true && <div onClick={this.props.onClick} className="notComplete"></div>
        }
        <span>{item.title}</span>
      </div>
    );
  }
}

export default TodoItem;
