import styles from "../modulecss/box.module.css";
import Boxview from "./Boxview";
import SlideHolder from "./SlideHolder";
export default function BoxGridHolder({ tracks, setTracks }) {
  return (
    <div className={styles.gridholder}>
      <SlideHolder tracks={tracks} setTracks={setTracks}/>
    </div>
  );
}
