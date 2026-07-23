import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBasket: false,
  basket: [],
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketOpen(state) {
      state.isBasket = !state.isBasket;
    },
    basketIsTrue(state, action) {
      state.isBasket = action.payload;
    },
    basketIsFalse(state, action) {
      state.isBasket = action.payload;
    },
    getBasket(state, action) {
      state.basket = [...state.basket, action.payload];
    },
    deleteInBasket: {
      prepare(id, variants) {
        return { payload: { id, variants } };
      },
      reducer(state, action) {
        state.basket = state.basket.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.variants === action.payload.variants
            ),
        );
      },
    },
  },
});
export const {
  basketOpen,
  getBasket,
  basketIsTrue,
  basketIsFalse,
  deleteInBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
