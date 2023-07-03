import styles from "../modulecss/box.module.css";
import img from "../logo.svg";
export default function Boxview(props) {
  function change() {
    props.setTracks((trackdata) => {
      console.log({ ...trackdata });
      return {
        ...trackdata,
        currentTrackIndex: props.index,
        currentTrack: props.tracks.tracks[props.index],
      };
    });
  }

  return (
    <div className={styles.container} onClick={change}>
      <div className={styles.imageholder}>
        <img
          src={props?.img ? props?.img : img}
          alt="img"
          style={{ height: "100%", width: "95%", borderRadius: "5px" }}
        />
      </div>
      <div className={styles.textholder}>
        <h3>
          {props?.title
            ? props?.title.length > 11
              ? props.title.slice(0, 8) + "..."
              : props?.title
            : "title"}
        </h3>
      </div>
    </div>
  );
}
