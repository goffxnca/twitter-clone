import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "./Checkout.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_userInfo">
        <div className="checkout__avatar">
          <Avatar src="https://pbs.twimg.com/profile_images/1308593799812141056/p6lb7KIO_normal.jpg" />
        </div>
        <div className="checkout__info">
          <span className="checkout__displayName">Goff Lee</span>
          <span className="checkout__accountName">@gofflee7</span>
        </div>
      </div>

      <KeyboardArrowDownIcon className="checkout__option" />
    </div>
  );
}

export default Checkout;
