import { Link } from "react-router-dom";
import styles from "./FirstLink.module.css";

function FirstLink() {
  return (
    <div className={styles.conteinerFirst}>
      <div className={styles.title}>
        <span></span>
        <h2>Category</h2>
        <span></span>
      </div>
      <div className={styles.container}>
        <Link to="/product/men?type=all">
          <img className={styles.left} src="/category-men.png" alt="men349" />
        </Link>
        <Link to="/product/women?type=all">
          <img
            className={styles.right}
            src="/category-women.png"
            alt="women349"
          />
        </Link>
      </div>
    </div>
  );
}

export default FirstLink;
