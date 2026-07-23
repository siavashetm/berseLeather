import styles from "./Collection.module.css";
import collectionData from "./CollectionData";
import { NavLink } from "react-router-dom";

function Collection() {
  const collectionArr = collectionData;

  return (
    <section className={styles.collection}>
      <div className={styles.title}>
        <span></span>
        <h2>Collection</h2>
        <span></span>
      </div>
      <div className={styles.grid}>
        {collectionArr.map((item) => {
          return (
            <NavLink
              to={`/product/${item.category}?type=${item.type}`}
              key={`${item.type}--${item.category}`}
            >
              <img
                src={item.imgCallection}
                alt={`${item.category}${item.type}`}
              />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default Collection;
