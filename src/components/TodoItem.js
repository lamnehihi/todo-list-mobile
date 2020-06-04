import React, { Component } from "react";
import "./TodoItem.css";
import checkBox from "./success.svg";
import deleteBtn from "./delete.svg";

class TodoItem extends Component {
  render() {
    const index = "0" + (this.props.index + 1) + ".";
    const item = this.props.item;
    const classNames = require("classnames");
    let className = "TodoItem";
    if (item.isComplete) {
      className = classNames(className, " TodoItem-complete");
    }
    return (
      <div className={className} onClick={this.props.onClick}>
        <div className="title">
          <span className="index">{index}</span>
          <span>{item.title}</span>
        </div>
        <img src={deleteBtn} onClick={this.props.onClickDelete} className="deleteBtn"/>
      </div>
    );
  }
}

export default TodoItem;
