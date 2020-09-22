import React, { useEffect, useState } from "react";
import "./TrendList.css";
import Trend from "./Trend";
import SettingsIcon from "@material-ui/icons/Settings";
import { IconButton } from "@material-ui/core";
import db from "./firebase";

function TrendList() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    db.collection("trends")
      .orderBy("totalTweets", "desc")
      .onSnapshot((snapshot) => {
        setTrends(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="trendList">
      <div className="trendList__header">
        <span className="sectionTitle">Trends for you</span>
        <IconButton className="baseTwitterIconButton ">
          <SettingsIcon />
        </IconButton>
      </div>

      {trends.map((trend) => (
        <Trend key={trend.id} {...trend.data} />
      ))}

      <div className="trendList__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default TrendList;
