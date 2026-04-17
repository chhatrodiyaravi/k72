import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video  muted autoPlay loop
      className='h-full w-full object-cover'
      src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1776423300~exp=1776426900~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=60718b001e2a742d6999158791dc7f20741b85dbcbffebf4e01260001ab86385&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default Video
