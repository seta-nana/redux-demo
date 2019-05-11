import React, { Component } from "react";
import classNames from 'classnames';
import "./Footer.css";

class Footer extends Component {
  render() {
    const {
      countItem,
      currentFilter,
      currentFilterAll,
      currentFilterActive,
      currentFilterCompleted
    } = this.props;

    let all = classNames('filter', {
      'filter-active': currentFilter === 'all'
    });

    let active = classNames('filter', {
      'filter-active': currentFilter === 'active'
    });

    let completed = classNames('filter', {
      'filter-active': currentFilter === 'completed'
    });

    return (
      <div className="Footer">
        <div className="countItem">{countItem} items left</div>
        <button onClick={currentFilterAll} className={all}>
          All
        </button>
        <button onClick={currentFilterActive} className={active}>
          Active
        </button>
        <button onClick={currentFilterCompleted} className={completed}>
          Completed
        </button>
      </div>
    );
  }
}

export default Footer;
