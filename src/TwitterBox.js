import { Avatar, Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import "./TwitterBox.css";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import DateRangeIcon from "@material-ui/icons/DateRange";
import db from "./firebase";
import firebase from "firebase";

function TwitterBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const sendTweetMessage = (e) => {
    e.preventDefault();
    if (!tweetMessage) return;

    db.collection("posts").add({
      avatar:
        "https://pbs.twimg.com/profile_images/1308593799812141056/p6lb7KIO_200x200.jpg",
      displayName: "Goff Xnca",
      userName: "@goffxnca",
      image: imageUrl,
      message: tweetMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage("");
    setImageUrl("");
  };

  return (
    <div className="twitterBox">
      <Avatar
        src="https://pbs.twimg.com/profile_images/1308593799812141056/p6lb7KIO_200x200.jpg"
        className="avatar--large"
      />
      <form className="twitterBox__form">
        <textarea
          className="twitterBox__message"
          placeholder="What's happending?"
          spellCheck="false"
          value={tweetMessage}
          onChange={(e) => setTweetMessage(e.target.value)}
        ></textarea>

        <input
          type="text"
          className="twitterBox__imageUrl"
          placeholder="Enter image URL (Optional)"
          spellCheck="false"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

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
            type="submit"
            onClick={sendTweetMessage}
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
