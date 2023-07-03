import "../modulecss/player.css";
import React from "react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export default function VideoPlayerr() {
  const [videoId, setVideoId] = React.useState("gieEQFIfgYc");
  const opts = {
    height: "500",
    width: "500",
    playerVars: {
      iv_load_policy: 0,
      controls: 0,
      autoplay: 0, // Autoplay the video
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title and player actions
      rel: 0,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
}
