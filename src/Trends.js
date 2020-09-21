import React from "react";
import "./Trends.css";
import Trend from "./Trend";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";

function Trends() {
  return (
    <div className="trends">
      <div className="trends__header">
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
      <div className="trend__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Trends;
