import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await fetch('http://127.0.0.1:3333/products/all');

    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  /* reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  }, */
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.products = action.payload;
      })
      .addCase(getProducts.pending, () => console.log('pending'))
      .addCase(getProducts.rejected, () => console.log('rejected'));
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
