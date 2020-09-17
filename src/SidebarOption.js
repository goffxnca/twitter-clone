import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidbarOption ${active && "sidbarOption--active"}`}>
      <Icon className="sidbarOption__icon" fontSize="medium" />
      <span className="sidbarOption__text">{text}</span>
    </div>
  );
}

export default SidebarOption;
