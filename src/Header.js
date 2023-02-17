import React from "react";
import { useState } from "react";
import "./header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import MicSharpIcon from "@mui/icons-material/MicSharp";

import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";

import AppsSharpIcon from "@mui/icons-material/AppsSharp";

import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import { Link } from "react-router-dom";
function Header() {
  const [inputsearch, setinputsearch] = useState("");
  return (
    <div className="header">
      <div className="header_left">
        <MenuSharpIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt=""
        />
      </div>
      <div className="header_input">
        <input
          onChange={(e) => setinputsearch(e.target.value)}
          value={inputsearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputsearch}`}>
          <SearchSharpIcon className="input_search" />
        </Link>

        <MicSharpIcon  />
      </div>
      <div className="header_icons">
        <VideoCallSharpIcon className="header_icon" />
        <AppsSharpIcon className="header_icon" />

        <NotificationsSharpIcon className="header_icon" />
        <AccountCircleSharpIcon className="header_icon" />
      </div>
    </div>
  );
}

export default Header;
