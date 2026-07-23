import styles from "./RenderItem.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function RenderItem({ renderArr }) {
  // note faqat arr bedast omade az men women reder kon

  // const product = useSelector((store) => store.products.product);
  return (
    <div className={styles.items}>
      {renderArr.map((item) => {
        return (
          <div className={styles.productCard} key={item.id}>
            <img src={item.img[0]} alt={item.name} />
            <h3>{item.name}</h3>
            <p className={styles.category}>{item.type}</p>
            <p className={styles.price}>{item.price}$</p>
            <Link to={`/detail/${item.id}`}>
              <Button style="detail">DETAIL</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default RenderItem;

// fixme   inja to filter ma moshkel darim ke nemishe bazi vaqta type nebinim ke az nav va az footer data begirim
// note mishe az men   va   women ham in condition nevesht ke kolan ye arr baraye render be in component berese
// note injori in component faqat render mikone  va ye hook baraye condition benevisim
// note badan in component bozorg mishe agar fekri barash nakonim chon search va sort ham ezafe mishan
