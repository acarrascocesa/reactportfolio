import React from 'react'
import './style/Cover.css'
import covervideo from "./../assets/covervideo.mp4"

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={covervideo} autoPlay loop muted></video>
        <h1>Angel Carrasco</h1>
        <p>Developer : React | Javascript | Python | HTML | CSS</p>
      
    </div>
  )
}

export default Cover
