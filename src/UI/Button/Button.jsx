import styles from "./button.module.css";
function Button({ children, style, onClick, disabled = false }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${styles[style] || ""} `}
    >
      {children}
    </button>
  );
}

export default Button;
