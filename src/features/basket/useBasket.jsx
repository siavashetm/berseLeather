import { useSelector } from "react-redux";
import Basket from "./Basket";

function BasketHook() {
  const isBasket = useSelector((store) => store.basket.isBasket);
  return <>{isBasket && <Basket />}</>;
}

export default BasketHook;
