import React from 'react'

const Video = ({rounded}) => {
  return (
    <div className={`${rounded} h-full w-full`}>
        <video src='/front-video.mp4' autoPlay muted loop className={`h-full w-full object-cover`}/>
    </div>
  )
}

export default Video