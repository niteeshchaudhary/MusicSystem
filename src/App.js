import "./App.css";
import React, { useState } from "react";
import BoxGridHolder from "./components/BoxGridHolder";
import HorizontalList from "./components/HorzontalList";
import Player from "./components/Player";
import SlideHolder from "./components/SlideHolder";
import TopNav from "./components/TopNav";
import VideoPlayerr from "./components/VideoPlayerr.js";
import txs from "./jsonfiles/tracks.json";

function App() {
  const [tracks, setTracks] = useState(txs);
  return (
    <div className="App">
      <TopNav />
      <BoxGridHolder tracks={tracks} setTracks={setTracks} />
      <Player tracks={tracks} setTracks={setTracks} />
    </div>
  );
}

export default App;
