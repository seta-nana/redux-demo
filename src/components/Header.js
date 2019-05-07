import React, { Component } from "react";
import "./Header.css";
import checkAll from "../img/check-all.svg";
import add from "../img/add.svg";

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
          alt="Icon"
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyUp={onKeyUp}
          value={newItem}
          onChange={onChange}
        />
        <img src={add} width={20} height={20} alt="Icon" />
      </div>
    );
  }
}

export default Header;
