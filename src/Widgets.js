import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Trend from "./Trend";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" spellCheck="false" />
      </div>

      <div className="widgets__trends">
        <div className="widgets__trendHeader">
          <span className="sectionTitle">Trends for you</span>
          <IconButton className="baseTwitterIconButton ">
            <SettingsIcon />
          </IconButton>
        </div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <div className="trend__trendShowmore baseTransition">
          <span>Show more</span>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
