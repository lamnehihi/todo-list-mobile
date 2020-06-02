import React, { Component } from "react";
import "./TodoItem.css";
import checkBox from "./success.svg";
import deleteBtn from "./delete.svg";

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
        <div className="title">
          {item.isComplete && (
            <img src={checkBox} onClick={this.props.onClick} />
          )}
          {item.isComplete !== true && (
            <div onClick={this.props.onClick} className="notComplete"></div>
          )}
          <span>{item.title}</span>
        </div>
        <img src={deleteBtn} onClick={this.props.onClickDelete} className="deleteBtn"/>
      </div>
    );
  }
}

export default TodoItem;
