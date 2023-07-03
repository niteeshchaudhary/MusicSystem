import styles from "../modulecss/topnav.module.css";
import img from "../images/icon4.png";
import person from "../images/person.svg";
import vdot from "../images/vdot.svg";
import { useEffect } from "react";
export default function TopNav() {
  return (
    <div className={styles.container}>
      <div className={styles.imageholder}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.textholder}>
        <h2>NK Music Player</h2>
        <p>Listen to ur pleasant musics here</p>
      </div>
      <div className={styles.options}>
        <div className={styles.opimg}></div>
      </div>
    </div>
  );
}
