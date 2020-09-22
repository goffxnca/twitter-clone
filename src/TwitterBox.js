import { Avatar, Button, IconButton } from "@material-ui/core";
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
      <form className="twitterBox__form">
        <textarea
          className="twitterBox__input"
          placeholder="What's happending?"
          spellCheck="false"
        ></textarea>

        <div className="twitterBox__option">
          <IconButton className="baseTwitterIconButton">
            <CropOriginalIcon />
          </IconButton>
          <IconButton className="baseTwitterIconButton">
            <GifIcon />
          </IconButton>
          <IconButton className="baseTwitterIconButton">
            <EqualizerIcon />
          </IconButton>
          <IconButton className="baseTwitterIconButton">
            <SentimentSatisfiedOutlinedIcon />
          </IconButton>
          <IconButton className="baseTwitterIconButton">
            <DateRangeIcon />
          </IconButton>
          <Button
            variant="contained"
            className="baseTwitterButton twitterBox__submit"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TwitterBox;
