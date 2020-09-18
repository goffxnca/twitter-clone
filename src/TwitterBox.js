import { Avatar, Button, Divider, IconButton } from "@material-ui/core";
import React from "react";
import "./TwitterBox.css";

import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";

function TwitterBox() {
  return (
    <div className="twitterBox">
      <Avatar
        src="https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_200x200.jpg"
        className="avatar--large"
      />
      <form class="twitterBox__form">
        <textarea
          className="twitterBox__input"
          placeholder="What's happending?"
        ></textarea>

        <Divider variant="middle" />

        <div class="twitterBox__option">
          <IconButton>
            <CropOriginalIcon />
          </IconButton>
          <IconButton>
            <GifIcon />
          </IconButton>
          <IconButton>
            <EqualizerIcon />
          </IconButton>
          <IconButton>
            <SentimentSatisfiedOutlinedIcon />
          </IconButton>
          <IconButton>
            <DateRangeIcon />
          </IconButton>
          <Button variant="outlined" className="twitterBox__submit">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TwitterBox;
