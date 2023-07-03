import styles from "../modulecss/horzontallist.module.css";
import img from "../logo.svg";
export default function HorizontalList() {
  return (
    <div className={styles.container}>
      <div className={styles.imageholder}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.textholder}>
        <h3>Hello</h3>
        <p>lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
    </div>
  );
}
