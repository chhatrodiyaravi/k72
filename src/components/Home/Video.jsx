import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        muted
        autoPlay
        loop
        className="h-full w-full object-cover"
        src="/video/bgvideo.mp4"
      ></video>
    </div>
  );
};

export default Video;
