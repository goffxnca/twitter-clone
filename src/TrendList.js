import React from "react";
import "./TrendList.css";
import Trend from "./Trend";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";

function TrendList() {
  return (
    <div className="trendList">
      <div className="trendList__header">
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
      <div className="trendList__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default TrendList;
