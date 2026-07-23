import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.col}>
          <h3>Berse Leather</h3>
          <p>Premium leather products crafted with quality and style.</p>
        </div>

        <div className={styles.col}>
          <h4>Quick Links</h4>

          <NavLink to="/">home▾</NavLink>

          <NavLink to="/product/men?type=all">men▾</NavLink>

          <NavLink to="/product/women?type=all">women▾</NavLink>

          <NavLink to="/about">about▾</NavLink>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <p>🌐 instagram: berse.leater</p>
          <p>📞 02632284238</p>
          <p>📍 karaj-foroqi-228</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Berse Leather. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
