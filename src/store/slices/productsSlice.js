import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
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
    onlyDiscounted: (state, action) => {
      state.products = action.payload.filter(
        (product) => product.discont_price > 0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log('fulfilled');
        console.log(state.filterDiscounted);
        if (state.filterDiscounted) {
          state.products = action.payload.filter(
            (product) => product.discont_price > 0
          );
        }
        if (state.randomize) {
          console.log(state.randomize);
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

export const { onlyDiscounted, setFilterDiscounted, setRandomize } =
  productsSlice.actions;
export default productsSlice.reducer;
