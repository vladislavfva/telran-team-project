import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import categoriesSlise from './slice/categoriesSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
    categories: categoriesSlise
  },
});
