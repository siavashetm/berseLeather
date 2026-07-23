import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useDispatch } from "react-redux";
import { basketOpen } from "./../basket/BasketSlice";
import { useState } from "react";

function Nav() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        {/* Left */}
        <div className={styles.left}>
          <img className={styles.logo} src="/logo.jpg" alt="Logo" />
        </div>

        {/* Center */}
        <ul className={styles.menu}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/product/men?type=all">MEN</NavLink>
          </li>

          <li>
            <NavLink to="/product/women?type=all">WOMEN</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        {/* Right */}
        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => dispatch(basketOpen())}
          >
            <img src="/basketIcon.png" alt="Cart" />
          </button>

          {/* search */}
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="search... "
            className={styles.searchInput}
          />
          <Link to={`/search?q=${searchInput}`} className={styles.searchBtn}>
            search
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
