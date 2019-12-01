import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./TodoItem.css";
import checkImg from "../img/checked.svg";
import uncheckImg from "../img/unchecked.svg";
import crossImg from "../img/cross.svg";

function TodoItem({ item, onClick, deleteItem }) {
  let url = item.isDone ? checkImg : uncheckImg;
  let className = classNames("TodoItem", {
    "TodoItem-done": item.isDone
  });

  return (
    <div className={className}>
      <img onClick={onClick} src={url} width={25} height={25} alt="Icon" />
      <p>{item.title}</p>
      <img
        onClick={deleteItem}
        src={crossImg}
        width={10}
        height={10}
        alt="Delete"
      />
    </div>
  );
}
// Type checking
TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }),
  // onClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoItem;
