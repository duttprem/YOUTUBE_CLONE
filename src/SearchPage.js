import React from "react";
import "./searchpage.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_filter">
        <TuneIcon />
      <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
      image="https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      channel="PremDutt Vines"
      verified
      subs="1.3M"
      NoOfVideos ="98"
      discription="This is one of the best channel on youtube!
      You always enjoy all videos" 
      />

      <hr/>

      <VideoRow 
      views="1.9M"
      subs="1.5M"
      discription="You enjoy all the videos ! with Fun and crazy"
      timestamp="5 days ago"
      channel="PremDutt Vines"
      title="Tha have the fun ! crazy!..."
      image="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <VideoRow 
      views="440k"
      subs="1.5M"
      discription="How to Earn the money ! Make the videos"
      timestamp="29 days ago"
      channel="PremDutt Vines"
      title="Youtube plateform is Greate!..."
      image="https://c.ndtvimg.com/2021-02/qr9d8od8_yt_640x480_01_February_21.jpg"
      />
      <VideoRow 
      views="2.9M"
      subs="1.5M"
      discription="Easy to make the video on youtube"
      timestamp="5 days ago"
      channel="PremDutt Vines"
      title="~Make the videos on youtube!..."
      image="https://www.xavier.edu/teachingwithtech/images/youtube.png"
      />
      <VideoRow 
      views="1.9M"
      subs="1.5M"
      discription="You enjoy all the videos ! with Fun and crazy"
      timestamp="5 days ago"
      channel="PremDutt Vines"
      title="Tha have the fun ! crazy!..."
      image="https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <VideoRow 
      views="440k"
      subs="1.5M"
      discription="How to Earn the money ! Make the videos"
      timestamp="29 days ago"
      channel="PremDutt Vines"
      title="Youtube plateform is Greate!..."
      image="https://c.ndtvimg.com/2021-02/qr9d8od8_yt_640x480_01_February_21.jpg"
      />
    </div>
  );
}

export default SearchPage;
