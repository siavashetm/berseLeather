import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productRout/ProductSlice";
import basketSlice from "./features/basket/BasketSlice";
const store = configureStore({
  reducer: { products: productsSlice, basket: basketSlice },
});

export default store;
