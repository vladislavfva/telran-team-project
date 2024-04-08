import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    liked: JSON.parse(localStorage.getItem("liked")) || [],
    amountLike: 0,
  },
  reducers: {
    addToLiked: (state, action) => {
      const { product } = action.payload;
      const index = state.liked.findIndex(
        (item) => item.product.id === product.id
      );
      if (index === -1) {
        const newProduct = {
          product: { ...product, amountLike: 1 },
        };
        state.liked.push(newProduct);
      } else {
        state.liked[index].product.amountLike++;
      }

      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    remove: (state, action) => {
      const { product } = action.payload;
      const index = state.liked.findIndex(
        (item) => item.product.id === product.id
      );
      if (index !== -1) {
        state.liked.splice(index, 1);
      }
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
    countLike: (state) => {
      let amountLike = 0;
      state.liked.forEach((item) => {
        amountLike += item.product.amountLike;
         
      });
      state.amountLike = amountLike;
      
    },
  },
});

export const { addToLiked, remove, countLike } = likedSlice.actions;
export default likedSlice.reducer;
