import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  product: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    isLoadingTrue(state) {
      state.isLoading = true;
    },
    isLoadingFalse(state) {
      state.isLoading = false;
    },
    getProduct(state, action) {
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export function getProduct() {
  return async function (dispatch) {
    try {
      dispatch({ type: "products/isLoadingTrue" });
      const res = await fetch("http://localhost:8000/products");
      const data = await res.json();
      dispatch({ type: "products/getProduct", payload: data });
    } catch (error) {
      console.log(`🔴${error}🔴`);
    }
  };
}

export const { isLoadingTrue, isLoadingFalse } = productsSlice.actions;
export default productsSlice.reducer;
