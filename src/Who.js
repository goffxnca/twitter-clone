import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Who.css";

function Who() {
  return (
    <div className="who baseTransition">
      <div className="who__avatar">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1307922492074397696/we8Do7A9_200x200.jpg"
          className="avatar--large"
        />
      </div>
      <div className="who__info">
        <span className="who__displayName">Youtube Gaming</span>
        <span className="who__accountName">@YoutubeGaming</span>
      </div>
      <Button className="who__followButton">Follow</Button>
    </div>
  );
}

export default Who;
