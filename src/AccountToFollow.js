import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./AccountToFollow.css";

function AccountToFollow() {
  return (
    <div className="accountToFollow baseTransition">
      <div className="accountToFollow__avatar">
        <Avatar
          src="https://pbs.twimg.com/profile_images/1307922492074397696/we8Do7A9_200x200.jpg"
          className="avatar--large"
        />
      </div>
      <div className="accountToFollow__info">
        <span className="accountToFollow__displayName">Youtube Gaming</span>
        <span className="accountToFollow__accountName">@YoutubeGaming</span>
      </div>
      <Button className="accountToFollow__followButton">Follow</Button>
    </div>
  );
}

export default AccountToFollow;
