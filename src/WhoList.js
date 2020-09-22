import React from "react";
import "./WhoList.css";
import Who from "./Who";

function WhoList() {
  return (
    <div className="whoList">
      <div className="whoList__header">
        <span className="sectionTitle">Who to follow</span>
      </div>
      <Who />
      <Who />
      <div className="whoList__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default WhoList;
