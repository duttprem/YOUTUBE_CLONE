import React from 'react'
import "./sidebar.css";
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';

import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected  Icon={HomeSharpIcon} title="Home"/>
        <SidebarRow Icon={WhatshotSharpIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscriptons"/>
        <hr />
        <SidebarRow  Icon={VideoLibrarySharpIcon} title="Library"/>
        <SidebarRow  Icon={HistorySharpIcon} title="History"/>
        <SidebarRow  Icon={OndemandVideoSharpIcon} title="Your Videos"/>
        <SidebarRow  Icon={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow  Icon={ThumbUpIcon} title="Like Video"/>
        <SidebarRow  Icon={ExpandMoreIcon} title="Show More"/>

        </div>
  )
}

export default Sidebar;