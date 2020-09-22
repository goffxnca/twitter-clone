import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Who.css";

function Who({ avatar, displayName, userName }) {
  return (
    <div className="who baseTransition">
      <div className="who__avatar">
        <Avatar src={avatar} className="avatar--large" />
      </div>
      <div className="who__info">
        <span className="who__displayName">{displayName}</span>
        <span className="who__accountName">{userName}</span>
      </div>
      <Button className="who__followButton">Follow</Button>
    </div>
  );
}

export default Who;
