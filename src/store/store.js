import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/productsSlice/productsSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
  },
});
