import React from "react";
import "./WhoToFollow.css";
import Trend from "./Trend";
import AccountToFollow from "./AccountToFollow";

function WhoToFollow() {
  return (
    <div className="whoToFollow">
      <div className="whoToFollow__header">
        <span className="sectionTitle">Who to follow</span>
      </div>
      <AccountToFollow />
      <AccountToFollow />
      <div className="whoToFollow__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default WhoToFollow;
