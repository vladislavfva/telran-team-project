import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});
