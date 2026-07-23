import RenderItem from "./../../UI/renderItem/RenderItem";
import styles from "./RandomProducts.module.css";

function RandomProducts({ product }) {
  const newArr = [
    product[3],
    product[8],
    product[10],
    product[6],
    product[12],
    product[13],
    product[1],
    product[9],
  ];

  return (
    <div>
      <div className={styles.title}>
        <span></span>
        <h2>offer bag</h2>
        <span></span>
      </div>

      <RenderItem renderArr={newArr} />
    </div>
  );
}

export default RandomProducts;
