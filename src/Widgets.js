import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Trend from "./Trend";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" spellCheck="false" />
      </div>

      <div className="widgets__trends">
        <div className="widgets__trendHeader">
          <span>Trends for you</span>
        </div>
        <Trend />
        <Trend />
      </div>
    </div>
  );
}

export default Widgets;
