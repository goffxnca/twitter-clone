import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidbarOption ${active ? "sidbarOption--active" : ""}`}>
      <div className="sidebarOption__wrapper">
        <Icon className="sidbarOption__icon" />
        <span className="sidbarOption__text">{text}</span>
      </div>
    </div>
  );
}

export default SidebarOption;
