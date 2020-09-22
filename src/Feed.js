import React, { useEffect, useState } from "react";
import "./Feed.css";
import TuneIcon from "@material-ui/icons/Tune";
import TwitterBox from "./TwitterBox";
import Post from "./Post";
import { IconButton } from "@material-ui/core";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <div className="feed__head">
        <span className="sectionTitle">Home</span>
        <IconButton className="baseTwitterIconButton">
          <TuneIcon />
        </IconButton>
      </div>

      <TwitterBox />
      {posts.map((post) => (
        <Post key={post.id} {...post.data} />
      ))}
    </div>
  );
}

export default Feed;
