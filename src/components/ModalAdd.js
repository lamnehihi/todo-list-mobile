import React, { Component } from "react";
import "./ModalAdd.css";
import PropTypes from 'prop-types';

class ModalAdd extends Component {
  render() {
    const { value, onChange, onKeyUp } = this.props;
    return (
      <div className="Modal">
        <input
          autoFocus
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
        ></input>
      </div>
    );
  }
}

ModalAdd.propTypes = {
  /** input the todo list item */
  value: PropTypes.string,
};

export default ModalAdd;
