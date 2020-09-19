import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Post.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1294387469681438720/9OjHyZSG_200x200.jpg"
          className="avatar--large"
        />
      </div>

      <div className="post__content">
        <div className="post__headerInfo">
          <span className="post__displayName">Maxist</span>
          <span className="post__userName">@Maxist11</span>
          <span className="post__dotSeparator">.</span>
          <span class="post__date">Aug 28</span>
          <IconButton className="post__setting baseTwitterIconButton ">
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <span className="post__message">
          Virtual book tour tonight, in a few hours! It’s on Zoom, so we can see
          each other, chat, I’ll answer your questions, it’ll be...magic. Come
          play! https://anunlikelystory.com/event/NPH
        </span>
        <div className="post__image">
          <img src="https://pbs.twimg.com/media/EhruRoDX0AMbPX6?format=jpg&name=large" />
        </div>
      </div>
    </div>
  );
}

export default Post;
