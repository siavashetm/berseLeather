import styles from "./DetailsProduct.module.css";
import { useState } from "react";

function ImageDetail({ findProduct }) {
  const [curImg, setCurImg] = useState(0);

  // note avaz kardan aks ha ba button👇
  const lastIndex = findProduct.img.length - 1;
  function handleNextImg() {
    setCurImg((cur) => (cur < lastIndex ? cur + 1 : 0));
  }
  function handlePrevious() {
    setCurImg((cur) => (cur > 0 ? cur - 1 : lastIndex));
  }

  return (
    <div className={styles.imageContainer}>
      <button onClick={handlePrevious} className={styles.btn}>
        -
      </button>
      <img src={findProduct.img[curImg]} />
      <button onClick={handleNextImg} className={styles.btn}>
        +
      </button>
    </div>
  );
}

export default ImageDetail;

// note ma aval index migirim ke index tedad aks ha malom beshe
// button event handler migire
//
