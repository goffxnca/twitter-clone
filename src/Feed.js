import React, { useState } from "react";
import "./Feed.css";
import TuneIcon from "@material-ui/icons/Tune";
import TwitterBox from "./TwitterBox";
import Post from "./Post";
import { IconButton } from "@material-ui/core";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__head">
        <span className="sectionTitle">Home</span>
        <IconButton className="baseTwitterIconButton">
          <TuneIcon />
        </IconButton>
      </div>

      <TwitterBox />

      <Post
        avatar="https://pbs.twimg.com/profile_images/1294387469681438720/9OjHyZSG_200x200.jpg"
        displayName="Maxist"
        userName="@maxist11"
        timestamp="Aug 28"
        message="Virtual book tour tonight, in a few hours! It’s on Zoom, so we can see each other, chat, I’ll answer your questions, it’ll be...magic. Come play! https://anunlikelystory.com/event/NPH"
        image="https://pbs.twimg.com/media/EhruRoDX0AMbPX6?format=jpg&name=large"
      />
      <Post
        avatar="https://pbs.twimg.com/profile_images/1284953674654126080/w06ouHnP_bigger.jpg"
        displayName="Backxwash"
        userName="@backxwash"
        timestamp="Aug 28"
        message="Porn hub loves to come across as super likeable and politically charged on social media to cover up the fact they’re just as complicit in child sex trafficking as others elites are"
        image="https://pbs.twimg.com/media/EejE1IVUEAEZ6E-?format=jpg&name=large"
      />
    </div>
  );
}

export default Feed;
