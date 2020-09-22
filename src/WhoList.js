import React, { useEffect, useState } from "react";
import "./WhoList.css";
import Who from "./Who";
import db from "./firebase";

function WhoList() {
  const [whos, setWhos] = useState([]);

  useEffect(() => {
    db.collection("whos").onSnapshot((snapshot) => {
      setWhos(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div className="whoList">
      <div className="whoList__header">
        <span className="sectionTitle">Who to follow</span>
      </div>
      {whos.map((who) => (
        <Who {...who.data} />
      ))}
      <div className="whoList__showmore baseTransition">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default WhoList;
