import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Trends from "./Trends";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" spellCheck="false" />
      </div>

      <Trends />

      <WhoToFollow />
    </div>
  );
}

export default Widgets;
