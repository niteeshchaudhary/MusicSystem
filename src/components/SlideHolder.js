import styles from "../modulecss/box.module.css";
import Boxview from "./Boxview";
import { useEffect } from "react";

export default function SlideHolder({ tracks, setTracks }) {
  useEffect(() => {
    var dt = document.getElementsByClassName(styles.slideholder2);
    console.log(styles.slideholder2);
    for (var i = 0; i < dt.length; i++) {
      console.log(dt[i].firstChild.textContent);
      dt[i].firstChild.style.visibility = "hidden";
    }
  }, []);
  const scrollleft = (e) => {
    e.currentTarget.parentElement.scrollBy({
      top: 0,
      left: -390,
      behavior: "smooth",
    });
    e.currentTarget.parentElement.lastChild.style.visibility = "visible";
    if (e.currentTarget.parentElement.scrollLeft <= 30) {
      e.currentTarget.style.visibility = "hidden";
    }
  };
  const scrollright = (e) => {
    e.currentTarget.parentElement.scrollBy({
      top: 0,
      left: 420,
      behavior: "smooth",
    });
    console.log(
      e.currentTarget.parentElement.scrollLeft,
      e.currentTarget.parentElement.clientWidth,
      e.currentTarget.parentElement.scrollWidth
    );
    e.currentTarget.parentElement.firstChild.style.visibility = "visible";
    if (
      e.currentTarget.parentElement.scrollLeft +
        e.currentTarget.parentElement.clientWidth ===
      e.currentTarget.parentElement.scrollWidth
    ) {
      e.currentTarget.style.visibility = "hidden";
    }
  };

  const checkScroll = (e) => {
    if (
      e.currentTarget.scrollLeft + e.currentTarget.clientWidth >=
      e.currentTarget.scrollWidth - e.currentTarget.children[1].offsetWidth
    ) {
      e.currentTarget.lastChild.style.visibility = "hidden";
    } else {
      e.currentTarget.lastChild.style.visibility = "visible";
    }
    if (e.currentTarget.scrollLeft === 0) {
      e.currentTarget.firstChild.style.visibility = "hidden";
    } else {
      e.currentTarget.firstChild.style.visibility = "visible";
    }
  };

  return (
    <div className={styles.slideholder2} onScroll={checkScroll}>
      <div className={styles.leftarrow} onClick={scrollleft}>
        &#10094;
      </div>
      {tracks?.tracks.map((value, index) => (
        <Boxview
          img={value.cover}
          title={value.name}
          index={index}
          key={index}
          tracks={tracks}
          setTracks={setTracks}
        />
      ))}
      {Array(20)
        .fill(0)
        .map((ele, index) => (
          <Boxview key={index} />
        ))}

      {/*  
      93 <Boxview />
      94 <Boxview />
      95 <Boxview />
      95.5
      <Boxview /> 96
      <Boxview />
      97 <Boxview /> 98
      <Boxview /> 99
      <Boxview /> */}
      <div className={styles.rightarrow} onClick={scrollright}>
        &#10095;
      </div>
    </div>
  );
}
