import React, { useRef } from 'react';
import vi from "./vi.mp4";
const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="" type="video/mp4" />
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};

export default VideoPlayer;
