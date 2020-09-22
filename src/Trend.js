import React from "react";
import "./Trend.css";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import tc from "thousands-counter";

function Trend({ country, hashtag, totalTweets }) {
  return (
    <div className="trend baseTransition">
      <div className="trend__country">
        <span>Trending in {country}</span>
        <IconButton className="post__setting baseTwitterIconButton ">
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
      <div className="trend__hashtag">{hashtag}</div>

      <div className="trend__tweetsTotal">
        {tc(totalTweets, { digits: 2 })} Tweets
      </div>
    </div>
  );
}

export default Trend;
