import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  priceFrom: 0,
  priceTo: Infinity,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await fetch(
      process.env.REACT_APP_BACKEND_BASE_URL + '/products/all'
    );

    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceFrom = action.payload;
    },
  },
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

export const { setProducts, setPriceFrom, setPriceTo } = productsSlice.actions;
export default productsSlice.reducer;
