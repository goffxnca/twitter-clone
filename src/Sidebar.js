import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Button, IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon fontSize="large" className="sidebar__twitterIcon" />
      <SidebarOption active text="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAltIcon} />
      <SidebarOption text="Profile" Icon={PermIdentityIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />
      <Button variant="outlined" className="baseTwitterButton  sidebar__tweet">
        Tweet
      </Button>
      <PostAddIcon className="sidebar__PostAddIcon" />
    </div>
  );
}

export default Sidebar;
