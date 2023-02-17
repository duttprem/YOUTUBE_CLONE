import React from "react";
import "./channelRow.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function ChannelRow({image, channel, verified, subs, NoOfVideos, discription}) {
  return (
    <div className="channelRow">
      <AccountCircleSharpIcon
        className="channelRow_logo"
        alt={channel}
        src={image}
      />
      <div className="channelRow_text">
        <h4>{channel } { verified && <CheckCircleOutlineIcon/>}</h4>
        <p> {subs} Subscribers . { NoOfVideos} videos</p>
        <p>{discription}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
