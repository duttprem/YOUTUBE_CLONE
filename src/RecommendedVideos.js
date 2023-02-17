import React from 'react'
import "./recommended.css"
import VideoCard from './VideoCard';
function RecommendedVideos() {
  return (
    <div className='recommendVideos'>
       <h2>Recommended</h2>
       <div className='recommendedVideos_Videos'>
        <VideoCard
        title="How to Increase your views"
        views="2.5M views"
        timestamp="3 days ago"
        channelImage=""
        channel="PremDutt Vines"
        image="https://global-uploads.webflow.com/6076d7df4e38902cc0e6dff3/629f7641d5480184fa155232_61c4518ad36c28f855df18f1_trim-YouTube-videos-online.png"/>
        <VideoCard
        title="Become a Web Developer in 10 days"
        views="3.5M views"
        timestamp="9 days ago"
        channelImage=""
        channel="WeBDeveloper"
        image="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"/>
        <VideoCard
        title="Crypto is important to everyone "
        views="1.5M views"
        timestamp="20 days ago"
        channelImage=""
        channel="CryptoInformer"
        image="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"/>
        <VideoCard
        title="Baby so Cute!So.........."
        views="11.5M views"
        timestamp="1 month ago"
        channelImage=""
        channel="KidsPlay"
        image="https://blog.hootsuite.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-19-at-2.43.27-PM.png"/>
        <VideoCard
        title="Know the Youtube facts! ..Really"
        views="0.5M views"
        timestamp="18 days ago"
        channelImage=""
        channel="KnowYoutubeFacts"
        image="https://vimeoblog.imgix.net/sites/7/2020/12/YT_Desktop_Module2Image.png?auto=format&lossless=1&fit=clamp&w=1000"/>
        <VideoCard
        title="World is Small? Change the things.."
        views="20M views"
        timestamp="3 months ago"
        channelImage=""
        channel="All In Motivator"
        image="https://www.aljazeera.com/wp-content/uploads/2022/02/2022-01-08T000000Z_470968464_RC2OUR94U9YX_RTRMADP_3_TESLA-SOFTWARE.jpg?resize=1800%2C1800"/>
        <VideoCard
        title="You Love the nature"
        views="2M views"
        timestamp="30 days ago"
        channelImage=""
        channel="NatureWithME"
        image="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"/>
        <VideoCard
        title="world Map Know the country!.."
        views="1M views"
        timestamp="22 days ago"
        channelImage=""
        channel="MapWorld"
        image="https://www.mapsofworld.com/images-mow/world-map.jpg"/>
        
       </div>
        </div>
  )
}

export default RecommendedVideos;