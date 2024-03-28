import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import categoriesSlise from './slices/categoriesSlice';
import singleProductSlice from './slices/singleProductSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
    singleProduct: singleProductSlice,
    categories: categoriesSlise,
    cart: cartSlice,
  },
});
