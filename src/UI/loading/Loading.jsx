import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <h2>Loading Products...</h2>
      <p>Please wait a moment.</p>
    </div>
  );
}

export default Loading;
