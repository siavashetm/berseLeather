import { useDispatch, useSelector } from "react-redux";
import styles from "./Basket.module.css";
import { basketIsFalse, deleteInBasket } from "./BasketSlice";

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((store) => store.basket.basket);
  //   const isBasket = useSelector((store) => store.basket.isBasket);

  if (!basket) {
    return <h2>Loading...</h2>;
  }

  const totalPrice = basket.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div className={styles.basketContainer}>
      <div className={styles.renderItem}>
        {basket.map((item) => {
          return (
            <div key={`${item.id}${item.variants}`} className={styles.item}>
              <img src={item.img} alt={item.id} />
              <h3>{item.name}</h3>
              <h4>{item.variants}</h4>
              <h3>{item.price}$</h3>
              <button
                className={styles.btnDelete}
                onClick={() => dispatch(deleteInBasket(item.id, item.variants))}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <div className={styles.priceContainer}>
          {!totalPrice ? (
            <h3 className={styles.notBasket}>you can buy a product!!!</h3>
          ) : (
            <button className={styles.price}> pay: {totalPrice}$</button>
          )}

          <button
            className={styles.closeBasket}
            onClick={() => dispatch(basketIsFalse(false))}
          >
            <h4>close basket </h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;

// id: "147"
// img: "/147-1.jpg"
// name: "niyosha"
// price: 170
// variants: "black flooter"
