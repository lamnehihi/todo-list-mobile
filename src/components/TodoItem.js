import React, { Component } from "react";
import "./TodoItem.css";
import deleteBtn from "./delete.svg";
import classNames from "classnames";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const { item, index, onClick, onClickDelete } = this.props; 
    const indexString = "0" + (index + 1) + ".";
    let className = "TodoItem";
    if (item.isComplete) {
      className = classNames(className, " TodoItem-complete");
    }
    return (
      <div className={className}>
        <div className="title" onClick={onClick}>
          <span className="index">{indexString}</span>
          <span>{item.title}</span>
        </div>
        <img src={deleteBtn} onClick={onClickDelete} className="deleteBtn" alt="abc"/>
      </div>
    );
  }
}

TodoItem.propTypes = {
  /** content of todo item */
  title: PropTypes.string.isRequired,
  /** index of todo item */
  index: PropTypes.number.isRequired,
  /** change status of todo item */
  onClick: PropTypes.func,  
  /** delete todo item when click delete button */
  onClickDelete: PropTypes.func
};

export default TodoItem;
