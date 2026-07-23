import { useEffect, useState } from "react";
import styles from "./Picslider.module.css";

function Picslider() {
  const [nextPic, setNextPic] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setNextPic((imgSlider) =>
        imgSlider >= 1 && imgSlider <= 3 ? imgSlider + 1 : 1,
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [setInterval]);

  return (
    <div className={styles.pic}>
      <img src={`/baner-${nextPic}.png`} alt={`img${nextPic}`} />
    </div>
  );
}

export default Picslider;
