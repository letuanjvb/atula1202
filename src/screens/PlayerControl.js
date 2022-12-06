import React, { useRef } from "react";
import useVideoPlayer from "../useVideoPlayer";
import "./PlayerControl.css";
import { BsFillPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';
import { BsFillVolumeUpFill } from 'react-icons/bs';
import { BsFillVolumeMuteFill } from 'react-icons/bs';

import video from "../videos/Black-panther.mp4"


const PlayerControl = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <BsFillPlayFill className="icons"/>
              ) : (
                <BsPauseFill className="icons"/>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">x0.5</option>
            <option value="1">x1</option>
            <option value="1.25">x1.25</option>
            <option value="2">x2</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
              <BsFillVolumeUpFill className="icons"/>
            ) : (
              <BsFillVolumeMuteFill className="icons"/>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerControl