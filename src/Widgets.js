import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import TrendList from "./TrendList";
import WhoToFollow from "./WhoList";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <div className="widgets_searchFlex">
          <SearchIcon className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" spellCheck="false" />
        </div>
      </div>

      <TrendList />
      <WhoToFollow />
    </div>
  );
}

export default Widgets;
