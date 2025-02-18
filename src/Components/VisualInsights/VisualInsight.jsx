import React, { useState } from "react";
import "./VisualInsight.css";

// Local video file paths
const videos = [
  { src: "./public/videos/video1.mp4" },
  { src: "./public/videos/video2.mp4" },
  { src: "./public/videos/video3.mp4" },
  { src: "./public/videos/video2.mp4" },
];

const VisualInsight = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="visual-insight">
      <h4 className="section-header">ABOUT AURAMAH</h4>
      <h1 className="section-title">VISUAL INSIGHT</h1>

      {/* Video Grid */}
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-frame" onClick={() => setSelectedVideo(video.src)}>
            <video className="video-preview" src={video.src} muted loop />
            <div className="play-button">▶</div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Popup with Close Button */}
      {selectedVideo && (
        <div className="video-popup">
          <button className="close-button" onClick={() => setSelectedVideo(null)}>✖</button>
          <video className="popup-video" src={selectedVideo} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default VisualInsight;
