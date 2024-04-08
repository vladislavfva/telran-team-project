import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    liked: JSON.parse(localStorage.getItem("liked")) || [],
    amount: 0,
  },
  reducers: {
    addToLiked: (state, action) => {
      const { product } = action.payload;
      const index = state.liked.findIndex(
        (item) => item.product.id === product.id
      );
      if (index === -1) {
        const newProduct = {
          product: { ...product, amount: 1 },
        };
        state.liked.push(newProduct);
      } else {
        state.liked[index].product.amount++;
      }

      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    remove: (state, action) => {
      const { product } = action.payload;
      state.liked = state.liked.filter(
        (item) => item.product.id !== product.id
      );

      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    countLike: (state, action) => {
      let amount = 0;
      state.liked.forEach((item) => {
        amount += item.product.amount;
      });
      state.amount = amount;
    },
  },
});

export const { addToLiked, remove, countLike } = likedSlice.actions;
export default likedSlice.reducer;
