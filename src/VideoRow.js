import React from 'react'
import "./videorow.css"
function VideoRow({
    views,subs,discription,timestamp,channel,title ,image
}) {
  return (
    <div className='videoRow'>
        <img src={image} alt=""/>
        <div className='videoRow_text'>
            <h3>{title}</h3>
            <p className='videoRow_headline'>
                {channel} . <span className='videoRow_subsNumber'> {subs} </span>Subscribers {views} views . {timestamp}</p>
            <p className='videoRow_discription'>{discription}</p>
            
        </div>
        </div>
  )
}

export default VideoRow;