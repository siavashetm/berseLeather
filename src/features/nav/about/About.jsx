import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../Nav";
import styles from "./About.module.css";
function About() {
  return (
    <>
      <Nav />

      <main className={styles.about}>
        <h1>About Berse Leather</h1>

        <p>
          Berse Leather is a modern leather goods store focused on quality,
          simplicity, and timeless design.
        </p>

        <p>
          Our collection includes handcrafted bags, wallets, backpacks, and
          everyday accessories made from premium genuine leather.
        </p>

        <p>
          This website was built as a React project to demonstrate modern
          frontend development using React, Redux Toolkit, React Router, and
          reusable components.
        </p>

        <div className={styles.features}>
          <div>
            <h3>Premium Materials</h3>
            <p>Carefully selected genuine leather for long-lasting products.</p>
          </div>

          <div>
            <h3>Modern Design</h3>
            <p>Minimal and elegant products for everyday use.</p>
          </div>

          <div>
            <h3>Fast Delivery</h3>
            <p>Reliable shipping with secure packaging.</p>
          </div>
        </div>

        <div className={styles.linkContainer}>
          <Link to="/product/men?type=all" className={styles.linkBtn}>
            to see men product
          </Link>
          <Link to="/product/women?type=all" className={styles.linkBtn}>
            to see women product
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default About;
