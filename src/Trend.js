import React from "react";
import "./Trend.css";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Trend() {
  return (
    <div className="trend baseTransition">
      <div className="trend__country">
        <span>Trending in Thailand</span>
        <IconButton className="post__setting baseTwitterIconButton ">
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
      <div className="trend__hashtag">#TheDayOfJinYong</div>

      <div className="trend__tweetsTotal">22.1K Tweets</div>
    </div>
  );
}

export default Trend;
