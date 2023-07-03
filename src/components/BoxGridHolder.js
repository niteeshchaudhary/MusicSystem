import styles from "../modulecss/box.module.css";
import Boxview from "./Boxview";
import SlideHolder from "./SlideHolder";
export default function BoxGridHolder() {
  return (
    <div className={styles.gridholder}>
      <SlideHolder />
    </div>
  );
}
