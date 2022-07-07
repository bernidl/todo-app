import React from "react";
import './TodoIcon.css';
import { VscCheckAll } from 'react-icons/vsc';
import { VscTrash } from "react-icons/vsc";

const iconTypes = {
    "check": color => (
      <VscCheckAll className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
      <VscTrash className="Icon-svg Icon-svg--delete" fill={color} />
    ),
  };
  
  function TodoIcon({ type, color = 'gray', onClick }) {
    return (
      <span
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
      >
        {iconTypes[type](color)}
      </span>
    );
  }

export { TodoIcon };