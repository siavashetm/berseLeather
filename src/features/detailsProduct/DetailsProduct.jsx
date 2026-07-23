import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./DetailsProduct.module.css";
import ImageDetail from "./ImageDetail";
import { useEffect, useState } from "react";
import { basketIsTrue, getBasket } from "../basket/BasketSlice";
import { getProduct } from "../productRout/ProductSlice";

function DetailsProduct() {
  // note state baraye chap va rang ke beshe active kardesh
  const [selectedVariant, setSelectedVariant] = useState("");

  // note gereftan obj ke rosh click shode
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const { id } = useParams();
  const product = useSelector((store) => store.products.product);
  const findProduct = product.find((items) => Number(items.id) === Number(id));

  const basket = useSelector((store) => store.basket.basket);
  console.log(basket);

  function handleVariant(item) {
    setSelectedVariant(item);
  }

  if (!findProduct) {
    return <h2>Loading...</h2>;
  }

  // banana  obj ke be basket mide va dispatch hash
  const objBasket = {
    name: findProduct.name,
    id: findProduct.id,
    img: findProduct.img[0],
    price: findProduct.price,
    variants: selectedVariant.leather,
  };

  function handleToBasket() {
    dispatch(getBasket(objBasket));
    dispatch(basketIsTrue(true));
  }

  return (
    <>
      <h4
        className={styles.path}
      >{`${findProduct.category} > ${findProduct.type} > ${findProduct.name} (${findProduct.id})`}</h4>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.buyContainer}>
            <h3 className={styles.name}>{findProduct.name} </h3>
            <h4 className={styles.id}>code : {findProduct.id}</h4>
            <p className={styles.leather}>leather :</p>
            {findProduct.details.variants.map((item, i) => {
              return (
                <Button
                  key={i}
                  style={`${selectedVariant === item ? "variantsActive" : "variants"}`}
                  onClick={() => handleVariant(item)}
                >
                  {selectedVariant === item
                    ? `${item.color} | ${item.leather} ✅`
                    : `${item.color} | ${item.leather}`}
                </Button>
              );
            })}
            <h4 className={styles.price}>price : {findProduct.price}$</h4>
            {!selectedVariant ? (
              <h4 className={styles.firstSelect}>
                pleas select your bag for buy !!
              </h4>
            ) : (
              <Button
                onClick={handleToBasket}
                style="buyBTN"
                disabled={!selectedVariant ? true : false}
              >
                BUY
              </Button>
            )}
          </div>

          <ImageDetail findProduct={findProduct} />
        </div>

        <div className={styles.detailsContainer}>
          <h2>details :</h2>

          <h3>{findProduct.details.firstDetails}</h3>

          {findProduct.details.inside.map((item, i) => {
            return <h3 key={i}>{item}</h3>;
          })}

          <p>{findProduct.details.daste}</p>
        </div>
      </div>
    </>
  );
}

export default DetailsProduct;

// note
// namayesh bede ke chi raft to basket
// ta akhar in jalase in karo kardim
