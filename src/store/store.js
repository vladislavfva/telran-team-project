import { configureStore } from "@reduxjs/toolkit";
import categoriesSlise from './slice/categoriesSlice';



export const store = configureStore({
  reducer: {
    categories: categoriesSlise
  },
});
