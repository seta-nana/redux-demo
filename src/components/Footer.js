import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";

import { filterAll, filterActive, filterCompleted } from "../redux";

import "./Footer.css";

function Footer({
  todoList,
  currentFilter,
  filterAll,
  filterActive,
  filterCompleted
}) {
  let all = classNames("filter", {
    "filter-active": currentFilter === "all"
  });

  let active = classNames("filter", {
    "filter-active": currentFilter === "active"
  });

  let completed = classNames("filter", {
    "filter-active": currentFilter === "completed"
  });

  const countItem = todoList.length;

  return (
    <div className="Footer">
      <div className="countItem">{countItem} items left</div>
      <button onClick={filterAll} className={all}>
        All
      </button>
      <button onClick={filterActive} className={active}>
        Active
      </button>
      <button onClick={filterCompleted} className={completed}>
        Completed
      </button>
    </div>
  );
}

export default connect(
  state => ({
    todoList: state.addTodo.todoList,
    currentFilter: state.filterTodo.filter
  }),
  dispatch => ({
    filterActive: () => dispatch(filterActive()),
    filterAll: () => dispatch(filterAll()),
    filterCompleted: () => dispatch(filterCompleted())
  })
)(Footer);
