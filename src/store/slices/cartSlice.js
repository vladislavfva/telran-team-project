import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    total: 0,
    amount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const index = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (index === -1) {
        // Если товар не найден в корзине, добавляем его
        const newItem = {
          product: { ...product, amount: 1 },
        };
        state.cart.push(newItem);
      } else {
        // Если товар уже есть в корзине, увеличиваем его количество
        state.cart[index].product.amount++;
      }

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const { product } = action.payload;
      state.cart = state.cart.filter((item) => item.product.id !== product.id);
      state.totalSum -= product.discount_price || product.price || 0;

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    decrease: (state, action) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );
      cartItem.product.amount = cartItem.product.amount - 1;

      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    // * можно удалить и делать в increase and decrease
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.product.amount;
        if (item.product.discont_price) {
          total += item.product.amount * item.product.discont_price;
        } else {
          total += item.product.amount * item.product.price;
        }
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increase,
  decrease,
  calculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
