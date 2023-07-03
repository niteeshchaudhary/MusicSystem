import "./App.css";
import BoxGridHolder from "./components/BoxGridHolder";
import HorizontalList from "./components/HorzontalList";
import Player from "./components/Player";
import SlideHolder from "./components/SlideHolder";
import TopNav from "./components/TopNav";
import VideoPlayerr from "./components/VideoPlayerr.js";

function App() {
  return (
    <div className="App">
      <TopNav />
      <BoxGridHolder />
      <Player />
    </div>
  );
}

export default App;
