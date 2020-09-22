import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Post.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import momentTwiter from "moment-twitter";

function Post({ avatar, displayName, userName, timestamp, message, image }) {
  const getTwitterDateFormat = (date) => {
    var d = new Date(date?.toDate());
    return momentTwiter(d).twitter();
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} className="avatar--large" />
      </div>

      <div className="post__content">
        <div className="post__headerInfo">
          <span className="post__displayName">{displayName}</span>
          <span className="post__userName">{userName}</span>
          <span className="post__dotSeparator">.</span>
          <span className="post__date">{getTwitterDateFormat(timestamp)}</span>
          <IconButton className="post__setting baseTwitterIconButton ">
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        <span className="post__message">{message}</span>
        <div className="post__image">
          <img src={image} alt="" />
        </div>

        <div className="post__option">
          <IconButton className="baseTwitterIconButton">
            <ModeCommentOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className="baseTwitterIconButton post__retweet">
            <RepeatOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className="baseTwitterIconButton post__like">
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton className="baseTwitterIconButton">
            <SystemUpdateAltIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Post;

/* <a href="#" className="post__hashtag">
  #njcu
</a>
<a href="#" className="post__hashtag">
  #njcudps
</a> */
