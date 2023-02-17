import React from 'react'
import "./sidebarRow.css";
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';

function SidebarRow  ({ selected, Icon, title })  {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
    <Icon className="sidebarRow_icon" />
        {/* <HomeSharpIcon/> */}
        <h2 className='sidebarRow_title'>{title}</h2>
        
        </div>
  )
}

export default SidebarRow;