import React, { Component } from "react";
import "./Header.css";
import checkAll from "../img/check-all.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    // Create a reference to input
    this.inputElement = React.createRef();
  }
  // Auto focus on input
  componentDidMount() {
    this.inputElement.current.focus();
  }

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
          ref={this.inputElement}
        />
      </div>
    );
  }
}

export default Header;
