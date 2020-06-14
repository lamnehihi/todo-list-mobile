import React, { Component } from "react";
import "./NothingHere.css";
import nothingHere from "./NothingHere.svg";
import PropTypes from 'prop-types';

class NothingHere extends Component {
  render() {
    return (
      <div className="nothing-here">
        <div className="title">
          <span className="top text">Seems like</span>
          <span className="bottom text">You have no list</span>
        </div>
        <img src={nothingHere} alt="abc"/>
      </div>
    );
  }
}

NothingHere.propTypes = {
  /** show when todo list has empty */
  value: PropTypes.string
};

export default NothingHere;
