import React, { Component } from "react";
import "./Header.css";
import checkAll from "../img/check-all.svg";
// import add from "../img/add.svg";

class Header extends Component {
  render() {
    const { onClick, onKeyUp, newItem, onChange } = this.props;

    return (
      <div className="header">
        <img
          onClick={onClick}
          src={checkAll}
          width={20}
          height={20}
          alt="SelectAll"
        />
        <input
          type="text"
          placeholder="Add a to-do"
          onKeyUp={onKeyUp}
          value={newItem}
          onChange={onChange}
        />
        {/* <img src={add} width={20} height={20} alt="Add" /> */}
      </div>
    );
  }
}

export default Header;
