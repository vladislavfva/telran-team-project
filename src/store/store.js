import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import categoriesSlise from "./slices/categoriesSlice";
import singleProductSlice from "./slices/singleProductSlice";
import cartSlice from "./slices/cartSlice";
import likedSlice from "./slices/likedSlice";

export const store = configureStore({
  reducer: {
    product: productsSlice,
    singleProduct: singleProductSlice,
    categories: categoriesSlise,
    cart: cartSlice,
    liked: likedSlice,
  },
});
