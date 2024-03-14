import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  originalProducts: [],
  filterDiscounted: false,
  randomize: false,
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
    setFilterDiscounted: (state, action) => {
      state.filterDiscounted = action.payload;
    },
    setRandomize: (state, action) => {
      state.randomize = action.payload;
    },
    filterPriceFrom: (state, action) => {
      state.products = state.originalProducts.filter(
        (product) => product.discont_price >= action.payload
      );
      console.log(state.products);
    },
    filterPriceTo: (state, action) => {
      state.products = state.originalProducts.filter(
        (product) => product.discont_price <= action.payload
      );
      console.log(state.products);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log('fulfilled');
        if (state.filterDiscounted) {
          state.products = action.payload.filter(
            (product) => product.discont_price > 0
          );
          state.originalProducts = state.products;
        }
        if (state.randomize) {
          state.products = state.products
            .slice()
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
        }
      })
      .addCase(getProducts.pending, () => console.log('pending'))
      .addCase(getProducts.rejected, () => console.log('rejected'));
  },
});

export const {
  setFilterDiscounted,
  setRandomize,
  filterPriceFrom,
  filterPriceTo,
} = productsSlice.actions;
export default productsSlice.reducer;
