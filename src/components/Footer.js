import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const {
      countItem,
      currentFilterAll,
      currentFilterActive,
      currentFilterCompleted
    } = this.props;

    return (
      <div className="Footer">
        <div className="countItem">{countItem} items left</div>
        <button onClick={currentFilterAll} className="filter">
          All
        </button>
        <button onClick={currentFilterActive} className="filter">
          Active
        </button>
        <button onClick={currentFilterCompleted} className="filter">
          Completed
        </button>
      </div>
    );
  }
}

export default Footer;
