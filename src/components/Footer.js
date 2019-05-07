import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { countItem, onClick } = this.props;

    return (
      <div className="Footer">
        <div className="countItem">{countItem} items left</div>
        <button onClick={onClick} className="filter">
          All
        </button>
        <button onClick={onClick} className="filter">
          Active
        </button>
        <button onClick={onClick} className="filter">
          Completed
        </button>
      </div>
    );
  }
}

export default Footer;
