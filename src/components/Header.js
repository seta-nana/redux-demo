import React, { useRef, useEffect } from "react";
import { func, string } from "prop-types";

import "./Header.css";
import checkAll from "../img/check-all.svg";

function Header({ onKeyUp, newItem, onChange }) {
  const inputElement = useRef("");

  useEffect(() => {
    inputElement.current.focus();
  }, []);

  return (
    <div className="header">
      <img src={checkAll} width={20} height={20} alt="select-all" />
      <input
        type="text"
        placeholder="Add a to-do"
        onKeyUp={onKeyUp}
        value={newItem}
        onChange={onChange}
        ref={inputElement}
      />
    </div>
  );
}

Header.propTypes = {
  onKeyUp: func.isRequired,
  onChange: func.isRequired,
  newItem: string.isRequired
};

export default Header;
