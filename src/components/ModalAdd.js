import React, { Component } from "react";
import "./ModalAdd.css";

class ModalAdd extends Component {
  render() {
    return (
      <div className="Modal">
        <input
          autoFocus
          type="text"
          placeholder="What needs to be done?"
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyUp={this.props.onKeyUp}
        ></input>
      </div>
    );
  }
}

export default ModalAdd;
